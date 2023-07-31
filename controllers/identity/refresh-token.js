/* eslint-disable no-undef */
import jsonwebtoken from 'jsonwebtoken';
import { error, removeRefreshTokenCookie } from '../../functions/index.js';

const { sign, verify } = jsonwebtoken;

export default async (req, res) => {
  if (!req.signedCookies.jwt_refresh_token) {
    throw error(401, 'Refresh token not provided');
  }

  let payload;
  try {
    payload = verify(req.signedCookies.jwt_refresh_token, process.env.JWT_SECRET);
  } catch (err) {
    removeRefreshTokenCookie(res);
    throw error(401, 'Refresh token invalid');
  }

  // see: https://gist.github.com/ziluvatar/a3feb505c4c0ec37059054537b38fc48
  delete payload.iat;
  delete payload.exp;
  delete payload.nbf;
  delete payload.jti;

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
  res.cookie('jwt_refresh_token', refreshToken, {
    domain: process.env.COOKIE_DOMAIN,
    secure: true,
    maxAge: oneDay,
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.json({ token, message: 'Token refresh successful' });
};
