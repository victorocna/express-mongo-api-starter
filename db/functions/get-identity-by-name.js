const { Identity } = require('../../models');

const getIdentityByName = async (name) => {
  const identity = await Identity.findOne({ name }).lean();
  return identity._id;
};

module.exports = getIdentityByName;
