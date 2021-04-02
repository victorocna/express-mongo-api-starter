const { error } = require('../../functions');
const { Identity } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (me) {
    throw error(404, 'Missing required params');
  }

  const profile = await Identity.findById(me).lean();
  if (!profile) {
    throw error(404, 'Profile not found');
  }

  return res.status(200).json(profile);
};
