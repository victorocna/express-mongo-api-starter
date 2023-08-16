const { Schema, model, SchemaTypes } = require('mongoose');
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
  {
    collection: 'trash',
    timestamps: true,
  }
);

module.exports = model(name, schema);
