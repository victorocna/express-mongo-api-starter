const { toString } = require('diacritic-regex');

const diacriticInsensitive = (filterNames = ['search']) => {
  return (req, _, next) => {
    const mappings = { t: 'țtȚT', s: 'șsȘS' };
    const convert = toString({ mappings });

    // Modify the query for each filter if it exists and is long enough
    filterNames?.forEach((filterName) => {
      if (req.query?.[filterName]?.length >= 3) {
        req.query[filterName] = convert(req.query[filterName]);
      }
    });

    next();
  };
};

module.exports = diacriticInsensitive;
