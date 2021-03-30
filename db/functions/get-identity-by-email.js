const { Identity } = require('../../models');

const getIdentityByEmail = async (email) => {
  const identity = await Identity.findOne({ email }).lean();
  return identity._id;
};

module.exports = getIdentityByEmail;
