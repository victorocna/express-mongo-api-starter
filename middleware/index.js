const authenticate = require('./authenticate');
const authorize = require('./authorize');
const userExists = require('./user-exists');
const userNotExist = require('./user-not-exist');

module.exports = {
  authenticate,
  authorize,
  userExists,
  userNotExist,
};
