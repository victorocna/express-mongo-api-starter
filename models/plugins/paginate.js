const sliceAndDice = require('../../functions/slice-and-dice');

const paginate = async function (options) {
  const { offset, sort, per_page: perPage = 30, page: currentPage = 1 } = sliceAndDice(options);

  const mQuery = this.find(this._conditions);
  mQuery.sort(sort);
  mQuery.skip(offset);
  mQuery.limit(perPage);

  // @see https://mongoosejs.com/docs/tutorials/lean.html
  mQuery.lean(true);

  const pages = await mQuery.exec();

  mQuery.limit(); // reset limit
  mQuery.skip(); // reset offset
  const count = await mQuery.countDocuments(this._conditions).exec();
  const hasNext = count > parseInt(pages.length + offset);
  const pageParams = {
    count: +count,
    hasNext: !!hasNext,
    page: +currentPage,
    perPage: +perPage,
  };
  return {
    pageParams,
    pages,
  };
};
module.exports = (schema) => {
  schema.query.paginate = paginate;
};
