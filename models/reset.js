import Hash from './hash';
import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * Hash for identity forgot password
 */
const name = 'reset';
const schema = new Schema({});

export default Hash.discriminator(name, schema);
