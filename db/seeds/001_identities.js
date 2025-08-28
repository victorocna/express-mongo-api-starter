import { Identity } from '@models';
import identities from '../resources/identities';

export async function seed() {
  try {
    console.log('Planting seeds for identities...');

    const seeds = await identities();

    // Create documents individually to ensure timestamps are properly added
    for (const seedData of seeds) {
      await Identity.create(seedData);
    }

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    console.error(err);
  }
}
