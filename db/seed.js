import { runSeeds } from 'express-goodies/functions';
import { todos } from '../examples/db/seeds';
import { identities } from './seeds';

const seed = async () => {
  // Add all collection seeds below
  await identities.seed();
  await todos.seed();
};

const seedMongoDb = async () => {
  await runSeeds(seed);
};

// Execute the seeds
seedMongoDb();
