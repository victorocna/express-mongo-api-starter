const whitelist = require('./whitelist');

const inWhitelist = (origin) => {
  for (const domain of whitelist) {
    // match URL starting with protocol
    if (origin.indexOf(domain) === 0) {
      return true;
    }
  }

  return false;
};

module.exports = inWhitelist;
