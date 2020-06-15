/**
 * Middleware for authorization
 * @see https://gist.github.com/joshnuss/37ebaf958fe65a18d4ff
 */
module.exports = (...allowed) => {
  const isAllowed = (role) => {
    return allowed.includes(role);
  };

  // return a middleware
  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role)) {
      return next();
    }

    return res.status(401).json({
      name: 'Error',
      message: 'Unauthorized',
    });
  };
};
