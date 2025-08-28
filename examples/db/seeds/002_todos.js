import { Todo } from '@examples/models';
import todos from '../resources/todos';

export async function seed() {
  try {
    console.log('Planting seeds for todos');

    const seeds = await todos();

    // Create documents individually to ensure timestamps are properly added
    for (const seedData of seeds) {
      await Todo.create(seedData);
    }

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    console.error(err);
  }
}
