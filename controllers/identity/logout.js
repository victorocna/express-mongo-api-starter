require('dotenv').config();

module.exports = async (req, res) => {
  const secure = process.env.NODE_ENV === 'production';
  const now = new Date(0);
  res.cookie('jwt_refresh_token', '', {
    secure,
    maxAge: now,
    signed: true,
    httpOnly: true,
    sameSite: true,
  });

  return res.json({ message: 'Logout successful' });
};
