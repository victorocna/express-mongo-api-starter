const removeRefreshTokenCookie = (res) => {
  res.cookie(process.env.JWT_TOKEN_NAME, '', {
    secure: true,
    maxAge: new Date(0),
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });
};

module.exports = removeRefreshTokenCookie;
