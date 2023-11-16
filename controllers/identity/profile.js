const { error } = require('../../functions');
const { Identity } = require('../../models');

module.exports = async (req, res) => {
  if (!req.user?.me) {
    throw error(404, 'Missing required params');
  }

  const document = await Identity.findById(req.user.me).lean();
  if (!document) {
    throw error(404, 'Account not found');
  }

  return res.status(200).json(document);
};
