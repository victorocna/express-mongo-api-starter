const { Todo } = require('../../models');
const { todos } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await todos();
    await Todo.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    console.error(err);
  }
};
