const { Schema, model, set } = require('mongoose');
const { paginate } = require('./plugins');
const { payer, reference } = require('./schemas');

const name = 'order';
const schema = new Schema({
  payer,
  user: reference,
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'open', 'canceled', 'refunded', 'rejected'],
    default: 'pending',
  },
  processed: {
    type: Boolean,
    default: false,
  },
  series: {
    type: String,
    required: true,
  },
  number: Number,
  reason: String,
  smartbill: {
    series: String,
    number: String,
  },
});

// Set schema plugins
schema.plugin(paginate);

// Set the default schema options
set('timestamps', true);

module.exports = model(name, schema);
