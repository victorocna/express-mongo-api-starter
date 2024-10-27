import { error } from '@functions';
import { Identity } from '@models';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

const { compare } = bcryptjs;
const { sign } = jsonwebtoken;

export default async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw error(400, 'Missing required params');
  }

  // Find the user by case-insensitive email search
  // The email should already be lowercase if loginSchema middleware was used
  const identity = await Identity.findOne({ email }).select('+password');
  if (!identity) {
    throw error(400, 'Your email or password are invalid');
  }

  // Block logins for accounts with too many retries
  if (identity?.retries >= 5) {
    await identity.updateOne({ active: false });
    throw error(400, 'Your account has been locked for security reasons');
  }

  const { id, name, active, confirmed, __t: role, password: passwordFromDb } = identity;
  if (!active || !confirmed) {
    throw error(400, 'Your account is not active');
  }

  const passwordsMatch = await compare(password, passwordFromDb);
  if (!passwordsMatch) {
    await identity.updateOne({ $inc: { retries: 1 } });
    throw error(400, 'Your username or password are invalid');
  } else {
    await identity.updateOne({ retries: 0 });
  }
  // the JWT public data payload
  const payload = { name, email, role, me: id };

  const token = sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  const refreshToken = sign(payload, process.env.JWT_SECRET, {
    expiresIn: '12h',
    algorithm: 'HS256',
  });

  // set refresk token as cookie
  const oneDay = 24 * 3600 * 1000;
  res.cookie(process.env.JWT_TOKEN_NAME, refreshToken, {
    secure: true,
    maxAge: oneDay,
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });

  // Add last login information to the current user
  await identity.updateOne({ lastLoginAt: Date.now() });

  return res.status(200).json({ token, message: 'Authentication successful' });
};
