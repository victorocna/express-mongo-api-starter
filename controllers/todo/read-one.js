const { error } = require('../../functions');
const { Todo } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { secret } = req.user;
  if (!id || !secret) {
    throw error(404, 'Missing required params');
  }

  const todo = await Todo.findOne({ _id: id, key: secret });
  if (!todo) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(todo);
};
