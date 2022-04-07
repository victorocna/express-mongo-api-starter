const { error } = require('../../../functions');
const { Identity } = require('../../../models');
const { Todo } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const { name } = req.body;
  const unique = { $regex: name, $options: 'i' };
  const alreadyExists = await Todo.findOne({ name: unique, 'identity._id': me, done: false });
  if (alreadyExists) {
    throw error(409, 'An identical todo already exists');
  }

  const identity = await Identity.findById(me).lean();
  const payload = {
    ...req.body,
    identity,
  };
  const todo = await Todo.create(payload);
  if (!todo) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json({ data: todo, message: 'Todo created' });
};
