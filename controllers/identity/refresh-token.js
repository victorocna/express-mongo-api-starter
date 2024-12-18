import { error, removeRefreshTokenCookie } from '@functions';
import jwt from 'jsonwebtoken';

export default async (req, res) => {
  const signedCookie = req.signedCookies[process.env.JWT_TOKEN_NAME];
  if (!signedCookie) {
    throw error(401, 'Refresh token not provided');
  }

  let payload;
  try {
    payload = jwt.verify(signedCookie, process.env.JWT_SECRET, { ignoreExpiration: true });
  } catch (err) {
    removeRefreshTokenCookie(res);
    throw error(401, 'Refresh token invalid');
  }

  // See: https://gist.github.com/ziluvatar/a3feb505c4c0ec37059054537b38fc48
  delete payload.iat;
  delete payload.exp;
  delete payload.nbf;
  delete payload.jti;

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '12h',
    algorithm: 'HS256',
  });

  // Set refresh token as cookie
  const oneDay = 24 * 3600 * 1000;
  const isProduction = process.env.NODE_ENV === 'production';

  res.cookie(process.env.JWT_TOKEN_NAME, refreshToken, {
    domain: process.env.COOKIE_DOMAIN,
    httpOnly: true,
    maxAge: oneDay,
    secure: isProduction,
    signed: true,
    sameSite: 'Lax',
  });

  return res.json({ token, message: 'Token refresh successful' });
};
