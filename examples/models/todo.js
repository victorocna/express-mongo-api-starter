const { Schema, model } = require('mongoose');
const { paginate, validate } = require('../../models/plugins');
const { reference } = require('../../models/schemas');

const schema = new Schema(
  {
    identity: reference,
    name: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

/**
 * Schema plugins
 *
 * pagination: add pages and pageParams
 * validation: validate model before save
 */
schema.plugin(paginate);
schema.plugin(validate);

module.exports = model('todo', schema);
