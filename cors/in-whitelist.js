import whitelist from './whitelist';

const inWhitelist = (origin) => {
  for (const domain of whitelist) {
    // match URL starting with protocol
    if (origin.indexOf(domain) === 0) {
      return true;
    }
  }

  return false;
};

export default inWhitelist;
