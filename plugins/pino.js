const pino = require('pino');

const isProduction = process.env.NODE_ENV === 'production';
const logEverywhere = process.env.LOG_EVERYWHERE === 'yes';

const logger = pino({
  enabled: !isProduction || logEverywhere,
});

module.exports = logger;
