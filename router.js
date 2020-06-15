const express = require('express');

const router = express.Router();
module.exports = router;

/**
 * Use the router instances defined
 * @see https://expressjs.com/en/api.html#app.use
 */
router.use(require('./routes/identity'));

/**
 * Matches any other HTTP method and route not matched before
 * @see https://expressjs.com/en/api.html#router.all
 */
router.all('*', (req, res) => {
  res.status(404).json({
    name: 'Error',
    message: 'Not found',
  });
});

/**
 * Custom error handler
 * @see https://expressjs.com/en/guide/error-handling.html
 */
// eslint-disable-next-line
router.use((err, req, res, next) => {
  if (!(err instanceof Error)) {
    return res.status(500).json({
      name: 'Error',
      message: 'Unknown error',
    });
  }

  // Validation error from Mongoose
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      name: 'ValidationError',
      message: err.message.split(':')[0],
    });
  }

  // HTTP status code from the Error object or a default of 400
  const { status = 400, name, message } = err;
  return res.status(status).json({ name, message });
});
