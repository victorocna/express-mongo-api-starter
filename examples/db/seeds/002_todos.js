/* eslint-disable no-console */
import { Todo } from '@examples/models';
import todos from '../resources/todos';

export async function seed() {
  try {
    console.log('Planting seeds for todos');

    const seeds = await todos();
    await Todo.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    console.error(err);
  }
}
