const { error } = require('../../functions');
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
  await todo.remove();

  return res.status(200).json(todo);
};
