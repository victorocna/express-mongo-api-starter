const { Router } = require('express');
const { notFound, status } = require('./middleware');
const { authenticate, errorHandler, setContext } = require('express-goodies/middleware');
const { identity } = require('./routes');
const { todo } = require('./examples/routes');
const httpContext = require('express-http-context');

const router = Router();
module.exports = router;

// protect all non-public routes
router.all('/admin', authenticate);
router.all('/admin/*', authenticate);

// useful middleware for testing
router.use(status.loading);
router.use(status.error);

// adds context storage
router.use(httpContext.middleware);
router.use(setContext);

// use the router instances defined
router.use(identity);
router.use(todo);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);
