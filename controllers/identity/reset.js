const { error } = require('../../functions');
const { Identity, Reset } = require('../../models');

module.exports = async (req, res) => {
  const { hash } = req.params;
  const { password } = req.body;
  if (!password || !hash) {
    throw error(400, 'Missing required params to reset your password');
  }

  const reset = await Reset.findOne({ hash }).select('identity');
  if (!reset) {
    throw error(404, 'Your reset token is invalid');
  }

  const { identity: id } = reset;
  const identity = await Identity.findById(id);
  if (!identity) {
    throw error(404, 'Account not found');
  }

  identity.password = password;
  await identity.save(); // validates and throws if anything is wrong
  await Reset.deleteMany({ hash });

  return res.status(200).json({ success: true });
};
