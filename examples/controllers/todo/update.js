import { Todo } from '@examples/models';
import { error } from '@functions';

export default async (req, res) => {
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
    throw error(400, 'Not allowed to update todo');
  }
  await todo.updateOne(req.body);

  return res.status(200).json({ data: todo, message: 'Todo updated' });
};
