const { Schema, model, SchemaTypes } = require('mongoose');
const { paginate } = require('./plugins');
const { reference } = require('./schemas');

const name = 'trash';
const schema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    data: {
      type: SchemaTypes.Mixed,
      required: true,
    },
    deletedBy: reference,
  },
  { collection: 'trash', timestamps: true }
);

// Set schema plugins
schema.plugin(paginate);

module.exports = model(name, schema);
