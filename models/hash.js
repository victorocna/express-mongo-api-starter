const mongoose = require('mongoose');

/**
 * Hashes are used for identity operations
 */
const name = 'hash';
const schema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  identity: {
    type: mongoose.Types.ObjectId,
    required: true,
    get: (value) => value.toString(),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(name, schema);
