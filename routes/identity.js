import { Router } from 'express';
import { recaptcha } from 'express-goodies/middleware';
import { Identity } from '../controllers';

const router = Router();

router.post('/confirm/:hash', recaptcha, Identity.confirm);
router.post('/forgot', recaptcha, Identity.forgot);
router.post('/login', recaptcha, Identity.login);
router.post('/reset/:hash', recaptcha, Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.post('/admin/change-password', Identity.changePassword);
router.get('/admin/profile', Identity.profile);

export default router;
