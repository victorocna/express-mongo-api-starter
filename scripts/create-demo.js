const { connectToMongo } = require('../functions');
const { Key, Identity } = require('../models');

const demo = async () => {
  await connectToMongo();

  // create our demo foreign key
  const key = await Key.create({ name: 'demo' });

  // create demo user
  await Identity.create({
    key: key.id,
    name: 'Michael Scott',
    email: 'michael@example.com',
    password: 'supersecretpassword',
    secret: 'demo',
    confirmed: true,
    active: true,
  });
};

(async () => {
  try {
    await demo(); // invoke function
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports.demo = demo;
