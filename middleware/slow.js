const { coffee } = require('../functions');

/**
 * Middleware for testing loading states
 */
module.exports = async (req, res, next) => {
  const { trigger } = req.query;
  if (trigger === 'slow') {
    await coffee();
  }

  next();
};
