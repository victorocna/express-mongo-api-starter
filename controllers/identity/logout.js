export default async (req, res) => {
  res.cookie(process.env.JWT_TOKEN_NAME, '', {
    domain: process.env.COOKIE_DOMAIN,
    secure: true,
    maxAge: new Date(0),
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.json({ message: 'Logout successful' });
};
