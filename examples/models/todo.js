import mongoose from 'mongoose';
import { paginate, validate } from '../../models/plugins/index.js';

const { Schema, model, Types } = mongoose;

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
});

schema.plugin(paginate);
schema.plugin(validate);

export default model('todo', schema);
