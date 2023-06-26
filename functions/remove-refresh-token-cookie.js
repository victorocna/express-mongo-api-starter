const removeRefreshTokenCookie = (res) => {
  res.cookie('jwt_refresh_token', '', {
    domain: process.env.COOKIE_DOMAIN,
    secure: true,
    maxAge: new Date(0),
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });
};

module.exports = removeRefreshTokenCookie;
