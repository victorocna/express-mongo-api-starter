import { ClientError } from '@controllers';
import { Router } from 'express';

const router = Router();

router.post('/client-errors', ClientError.createClientError);

export default router;
