import { ClientError } from '@controllers';
import { Router } from 'express';

const router = Router();
export default router;

router.post('/client-errors', ClientError.createClientError);
