const { runSeeds } = require('express-goodies/functions');
const seeds = require('./seeds');
const exampleSeeds = require('../examples/db/seeds');

const seed = async () => {
  // Add all collection seeds below
  await seeds.identities.seed();
  await exampleSeeds.todos.seed();
};

const seedMongoDb = async () => {
  await runSeeds(seed);
};
// Execute the seeds
seedMongoDb();
