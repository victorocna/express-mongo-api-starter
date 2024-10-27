import { Todo } from '@examples/controllers';
import { todoSchema } from '@examples/schemas';
import { diacriticInsensitive } from '@middleware';
import { Router } from 'express';
import { validate } from 'express-goodies/middleware';

const router = Router();

/**
 * Use RESTful routes only
 * @see https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
 */
router.get('/admin/todos', diacriticInsensitive(['search']), Todo.readMany);
router.get('/admin/todos/:id', Todo.readOne);
router.post('/admin/todos', validate(todoSchema), Todo.create);
router.put('/admin/todos/:id', Todo.update);
router.delete('/admin/todos/:id', Todo.remove);

router.post('/admin/todos/:id/check', Todo.check);
router.delete('/admin/todos/:id/check', Todo.uncheck);

export default router;
