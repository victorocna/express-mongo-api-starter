const { Identity } = require('../../models');

const getIdentityByEmail = async (name) => {
  const identity = await Identity.findOne({ name }).lean();
  return identity._id;
};

module.exports = getIdentityByEmail;
