const identities = require('./seeds/001_identities');

const runSeeds = async () => {
  // Add all collection seeds below
  await identities.seed();
};

module.exports = runSeeds;
