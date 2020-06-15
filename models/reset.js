const mongoose = require('mongoose');
const Hash = require('./hash');

/**
 * Hash for identity forgot password
 */
const name = 'reset';
const schema = new mongoose.Schema({});

module.exports = Hash.discriminator(name, schema);
