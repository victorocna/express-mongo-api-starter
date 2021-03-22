const { Schema, Types, model } = require('mongoose');
const { paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'todo';
const schema = new Schema({
  identity: {
    type: Types.ObjectId,
    required: true,
    get: (value) => value.toString(),
  },
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  ...timestamps,
});

schema.plugin(paginate);
schema.plugin(validate);

module.exports = model(name, schema);
