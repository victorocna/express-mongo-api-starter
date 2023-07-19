import { config } from 'dotenv';
import mongoose from 'mongoose';

const { connect } = mongoose;

config();

let cachedConnection;
const connectToMongo = () => {
  if (!cachedConnection) {
    // eslint-disable-next-line no-undef
    cachedConnection = connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }
  return cachedConnection;
};

export default connectToMongo;
