const authenticate = require('./authenticate');
const authorize = require('./authorize');
const errorHandler = require('./error-handler');
const fail = require('./fail');
const notFound = require('./not-found');
const recaptcha = require('./recaptcha');
const slow = require('./slow');
const userExists = require('./user-exists');
const userNotExist = require('./user-not-exist');

module.exports = {
  authenticate,
  authorize,
  errorHandler,
  fail,
  notFound,
  recaptcha,
  slow,
  userExists,
  userNotExist,
};
