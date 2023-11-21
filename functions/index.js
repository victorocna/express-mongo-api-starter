const randomHash = require('./random-hash');
const removeDiacritics = require('./remove-diacritics');
const removeRefreshTokenCookie = require('./remove-refresh-token-cookie');

// Aliases for functions that are used in multiple places.
// WARNING: Do not add more aliases here unless you really need to.
const coffee = require('express-goodies/functions/coffee');
const error = require('express-goodies/functions/error');
const falsy = require('express-goodies/functions/falsy');

module.exports = {
  randomHash,
  removeDiacritics,
  removeRefreshTokenCookie,

  // Aliases for functions that are used in multiple places.
  // WARNING: Do not add more aliases here unless you really need to.
  coffee,
  error,
  falsy,
};
