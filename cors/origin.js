import inWhitelist from './in-whitelist.js';

const origin = (origin, callback) => {
  // allow requests with no origin or from dev environment
  const isDev = process.env.NODE_ENV !== 'production';
  if (!origin || isDev) {
    return callback(null, true);
  }

  // allow requests from app URL
  if (origin === process.env.APP_BASE_URL) {
    return callback(null, true);
  }

  // allow request from whitelist
  if (inWhitelist(origin)) {
    return callback(null, true);
  }

  // deny any other request
  callback(new Error('Not allowed by CORS'));
};

export default origin;
