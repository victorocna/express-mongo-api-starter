import { todoFilter } from '@examples/filters';
import { Todo } from '@examples/models';
import { error } from '@functions';

export default async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const filter = todoFilter(req.query, req.user);
  const todos = await Todo.find(filter).paginate(req.query);
  if (!todos) {
    throw error(404, 'Resource not found');
  }

  // add current index for every document
  todos.pages.forEach((document, i) => {
    const { page, perPage } = todos.pageParams;
    document.no = (page - 1) * perPage + i + 1;
  });

  return res.status(200).json(todos);
};
