const connectToMongo = require('./connect');
const error = require('./error');
const randomHash = require('./random-hash');
const removeRefreshTokenCookie = require('./remove-refresk-token-cookie');
const sliceAndDice = require('./slice-and-dice');

module.exports = {
  connectToMongo,
  error,
  randomHash,
  removeRefreshTokenCookie,
  sliceAndDice,
};
