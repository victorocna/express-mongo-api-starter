const { Schema, model } = require('mongoose');

/**
 * Hashes are used for identity operations
 */
const name = 'loginAttempt';
const schema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model(name, schema);
