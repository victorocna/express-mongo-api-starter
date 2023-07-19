/* eslint-disable no-console */
import Identity from '../../models/identity';
import identities from '../resources/identities';

const seed = async () => {
  try {
    console.log('Planting seeds for identities...');

    const seeds = await identities();
    await Identity.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    console.error(err);
  }
};

export default { seed };
