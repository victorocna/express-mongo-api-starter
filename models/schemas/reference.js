const { Types } = require('mongoose');

module.exports = {
  _id: {
    type: Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
}
