const slowDown = require('express-slow-down');

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 250, // allow 250 requests per 15 minutes, then...
  delayMs: 500, // begin adding 500ms of delay per request above 100
  // request # 101 is delayed by 500ms
  // request # 102 is delayed by 1000ms
  // request # 103 is delayed by 1500ms
  // etc.
  maxDelayMs: 20000, // will not increase past 20000ms
  skip: () => {
    // skip requests for dev environments
    const isDev = process.env.NODE_ENV !== 'production';
    return isDev;
  },
});

module.exports = speedLimiter;
