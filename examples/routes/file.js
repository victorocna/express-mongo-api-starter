const { Router } = require('express');
const { File } = require('../controllers');

const router = Router();
module.exports = router;

router.post('/file/complex-form', File.complexForm);
router.post('/file/upload', File.fileUpload);
