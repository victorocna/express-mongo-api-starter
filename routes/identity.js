const { authenticate, recaptcha } = require('../middleware');
const { Identity } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.post('/confirm/:hash', recaptcha, Identity.confirm);
router.post('/forgot', recaptcha, Identity.forgot);
router.post('/login', recaptcha, Identity.login);
router.post('/reset/:hash', recaptcha, Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.get('/profile', authenticate, Identity.profile);
