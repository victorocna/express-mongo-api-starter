require('dotenv').config();
const mongoose = require('mongoose');

let cachedConnection;
module.exports = () => {
  if (!cachedConnection) {
    cachedConnection = mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }
  return cachedConnection;
};
