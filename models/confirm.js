const mongoose = require('mongoose');
const Hash = require('./hash');

/**
 * Hash for identity signup confirmations
 */
const name = 'confirm';
const schema = new mongoose.Schema({});

module.exports = Hash.discriminator(name, schema);
