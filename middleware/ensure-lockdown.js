const { error } = require('../functions');
const { LoginAttempt } = require('../models');

module.exports = async (req, res, next) => {
  //returns the failed login attempts made in the last 30 min
  const loginAttempts = await LoginAttempt.countDocuments({
    ip: req.ip,
    createdAt: { $gte: new Date(Date.now() - 30 * 60 * 1000) },
  });
  if (loginAttempts > 5) {
    throw error(400, 'Error! Too many login request made from this ip');
  }
  next();
};
