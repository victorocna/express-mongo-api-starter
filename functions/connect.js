require('dotenv').config();
const mongoose = require('mongoose');

let cachedConnection;
const connectToMongo = () => {
  if (!cachedConnection) {
    cachedConnection = mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }
  return cachedConnection;
};

module.exports = connectToMongo;
