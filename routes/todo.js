const { authenticate } = require('../middleware');
const { Todo } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/todos', authenticate, Todo.readMany);
router.get('/todos/:id', authenticate, Todo.readOne);
router.post('/todos', authenticate, Todo.create);
router.put('/todos/:id', authenticate, Todo.update);
router.delete('/todos/:id', authenticate, Todo.remove);

router.post('/todos/:id/check', authenticate, Todo.check);
router.delete('/todos/:id/check', authenticate, Todo.uncheck);
