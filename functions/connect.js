import 'dotenv/config';
import mongoose from 'mongoose';

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

export default connectToMongo;
