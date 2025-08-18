import { todoFilter } from '@examples/filters';
import { Todo } from '@examples/models';
import { error } from '@functions';

export default async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const filter = todoFilter(req.query, req.user);
  const todos = await Todo.find(filter).populate('identity._id', 'name').paginate(req.query);
  if (!todos) {
    throw error(404, 'Resource not found');
  }

  todos.pages.forEach((document, i) => {
    // Add current index for every document
    const { page, perPage } = todos.pageParams;
    document.no = (page - 1) * perPage + i + 1;

    // Set identity name from populated data
    if (document.identity._id?.name) {
      document.identity.name = document.identity._id.name;
    }

    // Remove populated _id to avoid confusion
    document.identity._id = undefined;
  });

  return res.status(200).json(todos);
};
