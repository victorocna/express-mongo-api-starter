import { Schema } from 'mongoose';
import Hash from './hash';

/**
 * Hash for identity signup confirmations
 */
const name = 'confirm';
const schema = new Schema({}, { autoCreate: false });

export default Hash.discriminator(name, schema);
