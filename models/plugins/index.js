const hashPasswords = require('./hash-passwords');
const normalizeId = require('./normalize-id');
const paginate = require('./paginate');
const softDelete = require('./soft-delete');
const validate = require('./validate');

module.exports = {
  hashPasswords,
  normalizeId,
  paginate,
  softDelete,
  validate,
};
