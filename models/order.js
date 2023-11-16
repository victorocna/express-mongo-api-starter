const { Schema, model } = require('mongoose');
const { paginate, reference } = require('express-goodies/mongoose');
const { payer } = require('./schemas');

const name = 'order';
const schema = new Schema(
  {
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
  },
  { timestamps: true }
);

// Set schema plugins
schema.plugin(paginate);

module.exports = model(name, schema);
