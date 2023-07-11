const { Schema, Types, model, set } = require('mongoose');
const { paginate } = require('./plugins');

const name = 'trash';
const schema = new Schema({
  type: {
    type: String,
    required: true,
  },
  data: {
    type: Types.Mixed,
    required: true,
  },
  deletedBy: {
    _id: {
      type: Types.ObjectId,
      required: true,
      get: (identity) => identity.toString(),
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
});

// Set schema plugins
schema.plugin(paginate);

// Set the default schema options
set('collection', 'trash');
set('timestamps', true);

module.exports = model(name, schema);
