import { Schema } from 'mongoose';
import Identity from './identity';

/**
 * Admins are identities who have extended permissions
 */
const name = 'admin';
const schema = new Schema(
  {
    active: {
      type: Boolean,
      default: true,
    },
  },
  { autoCreate: false }
);

export default Identity.discriminator(name, schema);
