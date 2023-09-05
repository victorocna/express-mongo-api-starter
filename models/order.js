import { paginate } from './plugins';
import { payer, reference } from './schemas';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

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

export default model(name, schema);
