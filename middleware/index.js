const authenticate = require('./authenticate');
const authorize = require('./authorize');
const fail = require('./fail');
const recaptcha = require('./recaptcha');
const slow = require('./slow');
const userExists = require('./user-exists');
const userNotExist = require('./user-not-exist');

module.exports = {
  authenticate,
  authorize,
  fail,
  recaptcha,
  slow,
  userExists,
  userNotExist,
};
