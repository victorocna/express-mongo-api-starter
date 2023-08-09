const yup = require('yup');

const safeSchema = (schema) => {
  // Builds yup schema and removes unwanted fields
  return yup.object().shape(schema).noUnknown(true);
};

module.exports = safeSchema;
