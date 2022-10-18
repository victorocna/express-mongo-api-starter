const { Router } = require('express');
const { authenticate, errorHandler, notFound, status } = require('./middleware');
const { identity } = require('./routes');
const { todo } = require('./examples/routes');

const router = Router();
module.exports = router;

// protect all non-public routes
router.all('/admin', authenticate);
router.all('/admin/*', authenticate);

// useful middleware for testing
router.use(status.loading);
router.use(status.error);

// use the router instances defined
router.use(identity);
router.use(todo);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);
