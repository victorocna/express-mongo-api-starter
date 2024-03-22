import mongoose from 'mongoose';
import Identity from './identity';

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

export default Identity.discriminator(name, schema);
