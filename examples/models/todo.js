import plugins from 'express-goodies/mongoose';
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  identity: {
    _id: {
      type: mongoose.Types.ObjectId,
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

schema.plugin(plugins.paginate);
schema.plugin(plugins.validate);

export default mongoose.model('todo', schema);
