const randomHash = require('./random-hash');
const removeRefreshTokenCookie = require('./remove-refresh-token-cookie');

// Aliases for functions that are used in multiple places
const { coffee, error, falsy, safeNumber, safeString } = require('express-goodies/functions');

module.exports = {
  randomHash,
  removeRefreshTokenCookie,

  // Aliases
  coffee,
  error,
  falsy,
  safeNumber,
  safeString,
};
