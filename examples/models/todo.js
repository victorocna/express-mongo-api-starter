import { paginate, validate } from 'express-goodies/mongoose';
import { model, Schema, Types } from 'mongoose';

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

// Set schema plugins
schema.plugin(paginate);
schema.plugin(validate);

export default model('todo', schema);
