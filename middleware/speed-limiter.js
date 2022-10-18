const slowDown = require('express-slow-down');

const speedLimiter = slowDown({
  windowMs: 5 * 60 * 1000, // 5 minutes
  delayAfter: 200, // allow 200 requests per 5 minutes, then...
  delayMs: 500, // begin adding 500ms of delay per request above 100
  // request # 201 is delayed by 500ms
  // request # 202 is delayed by 1000ms
  // request # 203 is delayed by 1500ms
  // etc.
  maxDelayMs: 20000, // will not increase past 20000ms
  skip: () => {
    // skip requests for dev environments
    const isDev = process.env.NODE_ENV !== 'production';
    return isDev;
  },
});

module.exports = speedLimiter;
