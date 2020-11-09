const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { hashPasswords, paginate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'identity';
const schema = new mongoose.Schema({
  key: {
    type: mongoose.Types.ObjectId,
    required: true,
    get: (value) => value.toString(),
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => isEmail(value),
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmedAt: {
    type: Date,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);

module.exports = mongoose.model(name, schema);
