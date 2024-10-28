import { Identity } from '@controllers';
import { loginSchema } from '@schemas';
import { Router } from 'express';
import { recaptcha, validate } from 'express-goodies/middleware';

const router = Router();
export default router;

router.post('/confirm/:hash', recaptcha, Identity.confirm);
router.post('/forgot', recaptcha, Identity.forgot);
router.post('/login', recaptcha, validate(loginSchema), Identity.login);
router.post('/reset/:hash', recaptcha, Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.post('/admin/change-password', Identity.changePassword);
router.get('/admin/profile', Identity.profile);
