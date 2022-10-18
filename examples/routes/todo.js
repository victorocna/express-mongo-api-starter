const { Router } = require('express');
const { Todo } = require('../controllers');

const router = Router();
module.exports = router;

/**
 * Use RESTful routes only
 * @see https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
 */
router.get('/admin/todos', Todo.readMany);
router.get('/admin/todos/:id', Todo.readOne);
router.post('/admin/todos', Todo.create);
router.put('/admin/todos/:id', Todo.update);
router.delete('/admin/todos/:id', Todo.remove);

router.post('/admin/todos/:id/check', Todo.check);
router.delete('/admin/todos/:id/check', Todo.uncheck);
