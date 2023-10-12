require('dotenv').config();
const { slice } = require('lodash');
const connectToMongo = require('./connect');

/**
 * Function designed to run scripts that interact with the database
 * @param {Function} fn The function to be executed
 *
 * Example usage (in scripts folder): runScript(myScript)
 */
const runScript = (fn) => {
  (async () => {
    try {
      // Ignore the first two params (node and the script path)
      const params = slice(process.argv, 2);

      if (!process.env.MONGODB_URI) {
        throw new Error('You must set your environment variables before running this script');
      }

      // Verify if the database specified in the environment is remote
      if (process.env.MONGODB_URI.includes('mongodb+srv') && !params.includes('--force')) {
        console.warn('Info: Use `--force` to run this script on a live database');
        throw new Error("You can't run this script on a live database");
      }

      await connectToMongo();

      // Run the script
      await fn(...params);
      process.exit();
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();
};

module.exports = runScript;
