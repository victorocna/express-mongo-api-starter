const paginate = async function (options) {
  const {
    direction = -1,
    order = 'created_at',
    per_page: perPage = 30,
    page: currentPage = 1,
  } = options;

  if (isNaN(perPage)) {
    throw new Error('Paginate error: perPage must be a number.');
  }
  if (isNaN(currentPage)) {
    throw new Error('Paginate error: currentPage must be a number.');
  }

  const mQuery = this.find(this._conditions);
  const offset = (currentPage - 1) * perPage;

  mQuery.sort({ [order]: direction });
  mQuery.skip(offset);
  mQuery.limit(+perPage);

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
