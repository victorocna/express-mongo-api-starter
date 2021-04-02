const { error } = require('../../functions');
const { Todo } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const filter = { identity: me };
  const { only } = req.query;
  if (only === 'completed') {
    filter.done = true;
  }
  if (only === 'pending') {
    filter.done = false;
  }

  const todos = await Todo.find(filter).paginate(req.query);
  if (!todos) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(todos);
};
