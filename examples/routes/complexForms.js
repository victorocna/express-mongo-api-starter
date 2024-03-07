const { Router } = require('express');
const { validate } = require('express-goodies/middleware');
const { ComplexForm } = require('../controllers');
const { todoSchema } = require('../schemas');

const router = Router();
module.exports = router;

router.post('/complex-forms', ComplexForm.createComplexForm);
