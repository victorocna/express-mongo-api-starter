import { paginate } from './plugins';
import { reference } from './schemas';
import mongoose from 'mongoose';

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
