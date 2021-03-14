const error = require('./error');

module.exports = (query) => {
  const { limit = 30, offset = 0, sort = 'createdAt', direction = 'desc' } = query;
  if (limit > 1024) {
    throw error(400, 'Too many results');
  }

  return {
    limit: parseInt(limit),
    offset: parseInt(offset),
    sort: [[sort, direction]],
  };
};
