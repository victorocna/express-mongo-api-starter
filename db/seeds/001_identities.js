const { Identity } = require('../../models');
const { identities } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await identities();
    await Identity.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    console.error(err);
  }
};
