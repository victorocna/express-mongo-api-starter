import mongoose from 'mongoose';
import Hash from './hash';

/**
 * Hash for identity forgot password
 */
const name = 'reset';
const schema = new mongoose.Schema({}, { autoCreate: false });

export default Hash.discriminator(name, schema);
