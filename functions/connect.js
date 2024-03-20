import 'dotenv/config';
import { connect } from 'mongoose';

let cachedConnection;
const connectToMongo = () => {
  if (!cachedConnection) {
    cachedConnection = connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return cachedConnection;
};

export default connectToMongo;
