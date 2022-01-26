const { Identity } = require('../../../models');

module.exports = async () => {
  const michael = await Identity.findOne({ email: 'michael@email.com' }).lean();
  const jim = await Identity.findOne({ email: 'jim@email.com' }).lean();

  return [
    {
      identity: michael._id,
      name: 'Make a todo list',
      done: true,
    },
    {
      identity: michael._id,
      name: 'Add integration tests',
      done: false,
    },
    {
      identity: michael._id,
      name: 'Complete starter project',
      done: false,
    },
    {
      identity: jim._id,
      name: 'Make fun of Dwight',
      done: false,
    },
    {
      identity: jim._id,
      name: 'Go home at 5PM sharp',
      done: true,
    },
  ];
};
