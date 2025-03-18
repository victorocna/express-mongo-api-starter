import { Todo } from '@examples/controllers';
import { todoSchema } from '@examples/schemas';
import { Router } from 'express';
import { validate } from 'express-goodies/middleware';

const router = Router();
export default router;

/**
 * Use RESTful routes only
 * @see https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
 */
router.get('/admin/todos', Todo.list);
router.get('/admin/todos/:id', Todo.view);
router.post('/admin/todos', validate(todoSchema), Todo.create);
router.put('/admin/todos/:id', Todo.update);
router.delete('/admin/todos/:id', Todo.remove);

router.post('/admin/todos/:id/check', Todo.check);
router.delete('/admin/todos/:id/check', Todo.uncheck);
