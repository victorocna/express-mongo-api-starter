const mongoose = require('mongoose');
const Identity = require('./identity');

/**
 * Admins are identities who have extended permissions
 */
const name = 'admin';
const schema = new mongoose.Schema({
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = Identity.discriminator(name, schema);
