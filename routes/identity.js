import { Identity } from '@controllers';
import { loginSchema, signupSchema } from '@schemas';
import { Router } from 'express';
import { authenticate, validate } from 'express-goodies/middleware';

const router = Router();
export default router;

router.post('/confirm/:hash', Identity.confirm);
router.post('/forgot', Identity.forgot);
router.post('/login', validate(loginSchema), Identity.login);
router.post('/signup', validate(signupSchema), Identity.signup);
router.post('/reset/:hash', Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.post('/admin/change-password', Identity.changePassword);
router.get('/profile', authenticate, Identity.profile);
