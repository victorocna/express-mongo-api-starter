const Identity = require('../../models/identity');
const identities = require('../resources/identities');

exports.seed = async () => {
  try {
    // eslint-disable-next-line
    console.log('Planting seeds for identities');

    const seeds = await identities();
    await Identity.insertMany(seeds);

    // eslint-disable-next-line
    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    console.error(err);
  }
};
