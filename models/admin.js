import mongoose from 'mongoose';
import Identity from './identity.js';
const { Schema } = mongoose;

/**
 * Admins are identities who have extended permissions
 */
const name = 'admin';
const schema = new Schema({
  active: {
    type: Boolean,
    default: true,
  },
});

export default Identity.discriminator(name, schema);
