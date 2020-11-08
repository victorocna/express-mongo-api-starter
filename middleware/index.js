const authenticate = require('./authenticate');
const authorize = require('./authorize');
const recaptcha = require('./recaptcha');
const userExists = require('./user-exists');
const userNotExist = require('./user-not-exist');

module.exports = {
  authenticate,
  authorize,
  recaptcha,
  userExists,
  userNotExist,
};
