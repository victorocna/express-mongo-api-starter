import expressGoodiesMongoose from 'express-goodies/mongoose';
import mongoose from 'mongoose';
import { payer } from './schemas';

const name = 'order';
const schema = new mongoose.Schema(
  {
    payer,
    user: expressGoodiesMongoose.reference,
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
schema.plugin(expressGoodiesMongoose.paginate);

export default mongoose.model(name, schema);
