import { toString } from 'diacritic-regex';

/**
 * @see https://chesscoders.atlassian.net/wiki/spaces/CC/pages/125075457/How+to+filter+query+data
 */
const diacriticInsensitive = (filterNames = ['search']) => {
  return (req, res, next) => {
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

export default diacriticInsensitive;
