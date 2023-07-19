import mongoose from 'mongoose';
import { paginate } from './plugins/index.js';
import { reference } from './schemas/index.js';
const { Schema, SchemaTypes, model } = mongoose;

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

export default model(name, schema);
