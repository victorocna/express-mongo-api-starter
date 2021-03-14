const { error } = require('../functions');

/**
 * Middleware for testing error states
 */
module.exports = (req, res, next) => {
  const { trigger } = req.query;
  if (trigger === 'fail') {
    throw error(400, 'Will always trigger an error');
  }

  next();
};
