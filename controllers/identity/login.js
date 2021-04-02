require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { error } = require('../../functions');
const { Identity } = require('../../models');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw error(400, 'Missing required params');
  }

  const identity = await Identity.findOne({ email }).select('+password');
  if (!identity) {
    throw error(400, 'Your email or password are invalid');
  }

  const { id, name, active, confirmed, __t: role, password: passwordFromDb } = identity;
  if (!active || !confirmed) {
    throw error(400, 'Your account is not active, yet');
  }

  const passwordsMatch = await bcrypt.compare(password, passwordFromDb);
  if (!passwordsMatch) {
    throw error(400, 'Your username or password are invalid');
  }

  // the JWT public data payload
  const payload = { name, email, role, me: id };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '60m',
    algorithm: 'HS256',
  });

  // set refresk token as cookie
  const secure = process.env.NODE_ENV === 'production';
  const oneDay = 24 * 3600 * 1000;
  res.cookie('jwt_refresh_token', refreshToken, {
    secure,
    maxAge: oneDay,
    signed: true,
    httpOnly: true,
    sameSite: true,
  });

  return res.status(200).json({ token, message: 'Authentication successful' });
};
