const { Router } = require('express');
const middleware = require('express-goodies/middleware');
const httpContext = require('express-http-context');
const { identity } = require('./routes');
const { todo } = require('./examples/routes');

const router = Router();
module.exports = router;

// Use express context
router.use(httpContext.middleware);
router.use(middleware.httpContext);

// Use speed limiter for all requests
router.use(middleware.speedLimiter);

// Protect all non-public routes
router.all('/admin', middleware.authenticate);
router.all('/admin/*', middleware.authenticate);

// Useful middleware for testing
router.use(middleware.testError);
router.use(middleware.testLoading);

// use the router instances defined
router.use(identity);
router.use(todo);

// Matches any other HTTP method and route not matched before
router.all('*', middleware.notFound);

// Finally, an error handler
router.use(middleware.errorHandler);
