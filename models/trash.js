const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const name = 'trash';
const options = {
  type: {
    type: String,
    required: true,
  },
  data: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
  deletedBy: {
    _id: {
      type: mongoose.Types.ObjectId,
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
};

const schema = new mongoose.Schema(options, { collection: 'trash' });
schema.plugin(paginate);

module.exports = mongoose.model(name, schema);
