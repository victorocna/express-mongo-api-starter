const yup = require('yup');
const safeSchema = require('./safe-schema');

const loginSchema = safeSchema({
  email: yup.string().lowercase().trim().required(),
  password: yup.string().trim().required(),
});

module.exports = loginSchema;
