const { error } = require('../../functions');
const { Confirm, Identity } = require('../../models');

module.exports = async (req, res) => {
  const { hash } = req.params;
  if (!hash) {
    throw error(400, 'Missing required params');
  }

  const confirm = await Confirm.findOne({ hash }).select('identity');
  if (!confirm) {
    throw error(404, 'Invalid confirmation code');
  }

  const { identity: id } = confirm;
  const identity = await Identity.findById(id);
  if (!identity) {
    throw error(404, 'Account not found');
  }

  identity.confirmed = true;
  identity.confirmedAt = Date.now();
  await identity.save(); // validates and throws if anything is wrong
  await Confirm.deleteMany({ hash });

  return res.status(200).json({ success: true });
};
