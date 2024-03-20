import { Types } from 'mongoose';

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
