const removeRefreshTokenCookie = (res) => {
  res.cookie(process.env.JWT_TOKEN_NAME, '', {
    domain: process.env.COOKIE_DOMAIN,
    httpOnly: true,
    maxAge: 0,
    secure: true,
    signed: true,
    sameSite: 'Lax',
  });
};

export default removeRefreshTokenCookie;
