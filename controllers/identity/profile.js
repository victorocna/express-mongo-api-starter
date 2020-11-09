const { error } = require('../../functions');
const { Identity } = require('../../models');

module.exports = async (req, res) => {
  const { id, secret } = req.user;
  if (!id || !secret) {
    throw error(404, 'Missing required params');
  }

  const profile = await Identity.findOne({ _id: id, key: secret }).lean();
  if (!profile) {
    throw error(404, 'Profile not found');
  }

  return res.status(200).json(profile);
};
