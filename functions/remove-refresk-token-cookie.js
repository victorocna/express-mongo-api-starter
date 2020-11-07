const removeRefreshTokenCookie = (res) => {
  const secure = process.env.NODE_ENV === 'production';
  const now = new Date(0);

  res.cookie('jwt_refresh_token', '', {
    secure,
    maxAge: now,
    signed: true,
    httpOnly: true,
    sameSite: true,
  });
};

module.exports = removeRefreshTokenCookie;
