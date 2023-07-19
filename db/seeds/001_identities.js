/* eslint-disable no-console */
import { insertMany } from '../../models/identity.js';
import identities from '../resources/identities.js';

export async function seed() {
  try {
    console.log('Planting seeds for identities...');

    const seeds = await identities();
    await insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    console.error(err);
  }
}
