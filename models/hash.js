import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

/**
 * Hashes are used for identity operations
 */
const name = 'hash';
const schema = new Schema(
  {
    hash: {
      type: String,
      required: true,
    },
    identity: {
      type: Types.ObjectId,
      required: true,
      get: (value) => value.toString(),
    },
  },
  { timestamps: true }
);

export default model(name, schema);
