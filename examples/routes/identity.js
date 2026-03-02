import { Identity } from '@examples/controllers';
import { signupSchema } from '@examples/schemas';

import { Router } from 'express';
import { recaptcha, validate } from 'express-goodies/middleware';

const router = Router();
export default router;

router.post('/signup', recaptcha, validate(signupSchema), Identity.signup);
