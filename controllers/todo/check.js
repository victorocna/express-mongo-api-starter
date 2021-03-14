const { error } = require('../../functions');
const { Todo } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { secret } = req.user;
  if (!id || !secret) {
    throw error(404, 'Missing required params');
  }

  const todo = await Todo.findOneAndUpdate(
    { _id: id, key: secret }, // filter
    { done: true } // data to update
  );
  if (!todo) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(todo);
};
