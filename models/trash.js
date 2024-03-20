import { Schema, SchemaTypes, model } from 'mongoose';
import { paginate } from './plugins';
import { reference } from './schemas';

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
