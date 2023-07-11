const { Schema, model, set } = require('mongoose');

/**
 * Keys group together mongoose models.
 * Every other model must be identified by a key and belongs to a key.
 */
const name = 'key';
const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

// Set the default schema options
set('timestamps', true);

module.exports = model(name, schema);
