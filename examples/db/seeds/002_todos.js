/* eslint-disable no-console */
import { insertMany } from '../../models/todo';
import todos from '../resources/todos';

export async function seed() {
  try {
    console.log('Planting seeds for todos');

    const seeds = await todos();
    await insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    console.error(err);
  }
}
