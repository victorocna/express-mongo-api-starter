const { Schema } = require('mongoose');
const Hash = require('./hash');

/**
 * Hash for identity forgot password
 */
const name = 'reset';
const schema = new Schema({});

module.exports = Hash.discriminator(name, schema);
