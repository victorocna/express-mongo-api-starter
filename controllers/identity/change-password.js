const { hashSync } = require('bcryptjs');
const { Identity } = require('../../models');
const { error } = require('express-goodies/functions');

module.exports = async (req, res) => {
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

  await document.updateOne({ password: hashSync(changePassword) });

  return res.status(200).json({
    data: document,
    message: 'Password was changed successfully',
  });
};
