const { error } = require('../../functions');
const { Todo } = require('../../models');

module.exports = async (req, res) => {
  const { secret } = req.user;
  if (!secret) {
    throw error(404, 'Missing required params');
  }

  const todo = await Todo.create({ ...req.body, key: secret });
  if (!todo) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(todo);
};
