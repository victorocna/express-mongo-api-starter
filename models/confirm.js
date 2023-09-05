import Hash from './hash';
import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * Hash for identity signup confirmations
 */
const name = 'confirm';
const schema = new Schema({});

export default Hash.discriminator(name, schema);
