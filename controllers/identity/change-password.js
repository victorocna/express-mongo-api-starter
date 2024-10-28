import { error } from '@functions';
import { Identity } from '@models';
import bcrypt from 'bcryptjs';

export default async (req, res) => {
  if (!req.user?.me) {
    throw error(404, 'Missing required params');
  }

  const { changePassword, confirmPassword } = req.body;
  if (!changePassword || !confirmPassword) {
    throw error(400, 'Missing required params');
  }

  if (changePassword !== confirmPassword) {
    throw error(400, 'Passwords do not match');
  }

  const document = await Identity.findById(req.user.me);
  if (!document) {
    throw error(500, 'Account not found');
  }

  await document.updateOne({ password: bcrypt.hashSync(changePassword) });

  return res.status(200).json({
    data: document,
    message: 'Password was changed successfully',
  });
};
