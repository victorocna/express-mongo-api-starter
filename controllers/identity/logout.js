module.exports = async (req, res) => {
  res.cookie('jwt_refresh_token', '', {
    domain: process.env.COOKIE_DOMAIN,
    secure: true,
    maxAge: new Date(0),
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.json({ message: 'Logout successful' });
};
