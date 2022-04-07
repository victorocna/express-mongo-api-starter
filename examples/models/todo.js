const { Schema, Types, model } = require('mongoose');
const { paginate, validate } = require('../../models/plugins');
const { timestamps } = require('../../models/schemas');

const schema = new Schema({
  identity: {
    _id: {
      type: Types.ObjectId,
      required: true,
      get: (value) => value.toString(),
    },
    email: {
      type: String,
      required: true,
    },
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

module.exports = model('todo', schema);
