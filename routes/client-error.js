const { Router } = require('express');
const { ClientError } = require('../controllers');

const router = Router();
module.exports = router;

router.post('/client-errors', ClientError.createClientError);
