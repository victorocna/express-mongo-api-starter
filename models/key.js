const mongoose = require('mongoose');

/**
 * Keys group together mongoose models.
 * Every other model must be identified by a key and belongs to a key.
 */
const name = 'key';
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(name, schema);
