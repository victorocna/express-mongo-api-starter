const jwt = require('jsonwebtoken');
const { error, removeRefreshTokenCookie } = require('../../functions');

module.exports = async (req, res) => {
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

  // see: https://gist.github.com/ziluvatar/a3feb505c4c0ec37059054537b38fc48
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

  // set refresk token as cookie
  const oneDay = 24 * 3600 * 1000;
  res.cookie('jwt_refresh_token', refreshToken, {
    secure: true,
    maxAge: oneDay,
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.json({ token, message: 'Token refresh successful' });
};
