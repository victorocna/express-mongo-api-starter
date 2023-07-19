import mongoose from 'mongoose';
import Hash from './hash';

const { Schema } = mongoose;

/**
 * Hash for identity signup confirmations
 */
const name = 'confirm';
const schema = new Schema({});

export default Hash.discriminator(name, schema);
