const { Router } = require('express');
const { recaptcha } = require('../middleware');
const { Identity } = require('../controllers');

const router = Router();
module.exports = router;

router.post('/confirm/:hash', recaptcha, Identity.confirm);
router.post('/forgot', recaptcha, Identity.forgot);
router.post('/login', recaptcha, Identity.login);
router.post('/reset/:hash', recaptcha, Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.get('/admin/profile', Identity.profile);
