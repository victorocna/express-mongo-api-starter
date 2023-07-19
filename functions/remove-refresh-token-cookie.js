const removeRefreshTokenCookie = (res) => {
  res.cookie('jwt_refresh_token', '', {
    // eslint-disable-next-line no-undef
    domain: process.env.COOKIE_DOMAIN,
    secure: true,
    maxAge: new Date(0),
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });
};

export default removeRefreshTokenCookie;
