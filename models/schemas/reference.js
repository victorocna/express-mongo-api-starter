import mongoose from 'mongoose';
const { Types } = mongoose;

export default {
  _id: {
    type: Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
};
