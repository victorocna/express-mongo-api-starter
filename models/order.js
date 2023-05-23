const { Schema, model } = require('mongoose');
const { paginate } = require('./plugins');
const { payer, reference, timestamps } = require('./schemas');

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
    enum: ['approved', 'pending', 'rejected'],
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
  ...timestamps,
});

schema.plugin(paginate);

module.exports = model(name, schema);
