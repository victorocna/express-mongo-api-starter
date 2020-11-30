const { error, randomHash } = require('../../functions');
const { Identity, Reset } = require('../../models');

module.exports = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw error(400, 'Missing required params');
  }

  const identity = await Identity.findOne({ email }).select('_id');
  if (!identity) {
    throw error(404, 'Account does not exist');
  }

  const hash = randomHash();
  await Reset.deleteMany({ identity });
  await Reset.create({ hash, identity });

  return res.status(200).json({ success: true });
};
