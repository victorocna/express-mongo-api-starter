import { Router } from 'express';
import { todo } from './examples/routes/index.js';
import { authenticate, errorHandler, notFound, status } from './middleware/index.js';
import { identity } from './routes/index.js';

const router = Router();
export default router;

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
