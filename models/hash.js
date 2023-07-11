const { Schema, Types, model, set } = require('mongoose');

/**
 * Hashes are used for identity operations
 */
const name = 'hash';
const schema = new Schema({
  hash: {
    type: String,
    required: true,
  },
  identity: {
    type: Types.ObjectId,
    required: true,
    get: (value) => value.toString(),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Set the default schema options
set('timestamps', true);

module.exports = model(name, schema);
