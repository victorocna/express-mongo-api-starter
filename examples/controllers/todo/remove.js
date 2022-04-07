const { error } = require('../../../functions');
const { Todo } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const todo = await Todo.findById(id);
  if (!todo) {
    throw error(404, 'Resource not found');
  }
  if (todo.identity._id !== me) {
    throw error(400, 'Not allowed to remove todo');
  }
  await todo.remove();

  return res.status(200).json({ data: todo, message: 'Todo removed' });
};
