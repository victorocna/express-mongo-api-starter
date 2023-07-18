const yup = require('yup');

module.exports = yup
  .object()
  .shape({
    name: yup.string().trim().required(),
    done: yup.boolean(),
  })
  // removes unwanted or unknown fields
  .noUnknown(true);
