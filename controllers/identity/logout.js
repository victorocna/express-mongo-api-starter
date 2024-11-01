import { removeRefreshTokenCookie } from '@functions';

export default async (req, res) => {
  removeRefreshTokenCookie(res);

  return res.json({ message: 'Logout successful' });
};
