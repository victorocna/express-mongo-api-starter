/* eslint-disable no-console */
const Todo = require('../../models/todo');
const todos = require('../resources/todos');

exports.seed = async () => {
  try {
    console.log('Planting seeds for todos');

    const seeds = await todos();
    await Todo.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert todos');
    console.error(err);
  }
};
