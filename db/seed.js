/* eslint-disable no-console */
const connectToMongo = require('../functions/connect');
const dropCollections = require('./functions/drop-collections');
const runSeeds = require('./run-seeds');

const seed = async (params) => {
  if (!process.env.MONGODB_URI) {
    throw new Error('You must set your environment variables before running this script');
  }

  // Verify if the database specified in the environment is remote
  if (process.env.MONGODB_URI.includes('mongodb+srv') && !params.includes('--force')) {
    console.warn('Info: Use `--force` param to run this seed on a live database');
    throw new Error("You can't run this seed on a live database");
  }

  await connectToMongo();

  // Clean all collections on development environments only
  if (params.includes('--clean')) {
    if (process.env.NODE_ENV !== 'production') {
      await dropCollections();
    } else {
      throw new Error("Really??? You can't clean all collections on production environment");
    }
  }

  await runSeeds();
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
