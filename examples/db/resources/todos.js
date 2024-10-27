import { Identity } from '@models';

export default async () => {
  const michael = await Identity.findOne({ email: 'michael@email.com' }).lean();
  const jim = await Identity.findOne({ email: 'jim@email.com' }).lean();

  return [
    {
      identity: michael,
      name: 'Make a todo list',
      done: true,
    },
    {
      identity: michael,
      name: 'Add integration tests',
      done: false,
    },
    {
      identity: michael,
      name: 'Complete starter project',
      done: false,
    },
    {
      identity: jim,
      name: 'Make fun of Dwight',
      done: false,
    },
    {
      identity: jim,
      name: 'Go home at 5PM sharp',
      done: true,
    },
  ];
};
