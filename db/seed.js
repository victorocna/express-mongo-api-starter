/* eslint-disable no-console */
const mongoose = require('mongoose');
const connectToMongo = require('../functions/connect');
const identities = require('./seeds/001_identities');

const dropCollections = async () => {
  try {
    const connection = mongoose.connection;
    const collections = await connection.db.listCollections().toArray();

    for (let collection of collections) {
      console.log(`Dropping ${collection.name} collection...`);
      await connection.db.dropCollection(collection.name);
      console.log('✓');
    }
  } catch (err) {
    console.error(err);
    throw new Error('Error! Cannot not clean db');
  }
};

const seed = async (params) => {
  if (!process.env.MONGODB_URI) {
    throw new Error('You must set your environment variables before running this script');
  }
  if (process.env.MONGODB_URI.includes('mongodb+srv') && !params.includes('--force')) {
    console.warn('Info: Use `--force` param to run this seed on a live database');
    throw new Error("You can't run this seed on a live database");
  }

  await connectToMongo();

  if (params.includes('--clean')) {
    await dropCollections();
  }

  await identities.seed();
};

(async () => {
  try {
    const params = process.argv.slice(2);
    await seed(params); // invoke function
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports.seed = seed;
