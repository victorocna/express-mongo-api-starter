const cors = require('cors');
const origin = require('./origin');

const setupCors = () => {
  return cors({
    origin,
    credentials: true,
    exposedHeaders: [
      'Content-Disposition',
      // add exposed headers here
    ],
  });
};

module.exports = setupCors;
