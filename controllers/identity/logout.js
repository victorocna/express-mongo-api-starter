module.exports = async (req, res) => {
  res.cookie(process.env.JWT_TOKEN_NAME, '', {
    secure: true,
    maxAge: new Date(0),
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.json({ message: 'Logout successful' });
};
