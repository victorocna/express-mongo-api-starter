import mongoose from 'mongoose';

/**
 * Hashes are used for identity operations
 */
const name = 'hash';
const schema = new mongoose.Schema(
  {
    hash: {
      type: String,
      required: true,
    },
    identity: {
      type: mongoose.Types.ObjectId,
      required: true,
      get: (value) => value.toString(),
    },
  },
  { timestamps: true }
);

export default mongoose.model(name, schema);
