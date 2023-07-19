import mongoose from 'mongoose';
import Hash from './hash';

const { Schema } = mongoose;

/**
 * Hash for identity forgot password
 */
const name = 'reset';
const schema = new Schema({});

export default Hash.discriminator(name, schema);
