const connectToMongo = require('../functions/connect');
const identities = require('./seeds/001_identities');
const todos = require('./seeds/002_todos');

const seed = async () => {
  await connectToMongo();

  await identities.seed();
  await todos.seed();
};

(async () => {
  try {
    await seed(); // invoke function
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports.seed = seed;
