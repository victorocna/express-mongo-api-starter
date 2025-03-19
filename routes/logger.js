import { Logger } from '@controllers';
import { Router } from 'express';
import { speedLimiter } from 'express-goodies/middleware';

const router = Router();
export default router;

// Log errors and others
router.post('/log-errors', speedLimiter, Logger.appError);
router.post('/client-errors', speedLimiter, Logger.appError); // deprecated
