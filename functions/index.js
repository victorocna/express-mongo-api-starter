const randomHash = require('./random-hash');
const removeRefreshTokenCookie = require('./remove-refresh-token-cookie');

// Aliases
const coffee = require('express-goodies/functions/coffee');
const error = require('express-goodies/functions/error');
const falsy = require('express-goodies/functions/falsy');

module.exports = {
  randomHash,
  removeRefreshTokenCookie,

  // Aliases
  coffee,
  error,
  falsy,
};
