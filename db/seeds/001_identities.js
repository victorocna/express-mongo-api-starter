/* eslint-disable no-console */
const Identity = require('../../models/identity');
const identities = require('../resources/identities');

exports.seed = async () => {
  try {
    console.log('Planting seeds for identities');

    const seeds = await identities();
    await Identity.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    console.error(err);
  }
};
