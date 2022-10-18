const authenticate = require('./authenticate');
const authorize = require('./authorize');
const errorHandler = require('./error-handler');
const notFound = require('./not-found');
const recaptcha = require('./recaptcha');
const speedLimiter = require('./speed-limiter');
const status = require('./status');
const userExists = require('./user-exists');
const userNotExist = require('./user-not-exist');

module.exports = {
  authenticate,
  authorize,
  errorHandler,
  notFound,
  recaptcha,
  speedLimiter,
  status,
  userExists,
  userNotExist,
};
