const paginate = async function (options) {
  const {
    direction = -1,
    order = 'createdAt',
    per_page: perPage = 30,
    page: currentPage = 1,
  } = options;

  if (isNaN(perPage)) {
    throw new Error('Paginate error: per_page must be a number');
  }
  if (isNaN(currentPage)) {
    throw new Error('Paginate error: page must be a number');
  }

  const mQuery = this.find(this._conditions);
  const offset = (currentPage - 1) * perPage;

  mQuery.sort({ [order]: direction });
  mQuery.skip(offset);
  mQuery.limit(Number(perPage));

  // @see https://mongoosejs.com/docs/tutorials/lean.html
  mQuery.lean(true);

  const pages = await mQuery.exec();

  mQuery.limit(); // reset limit
  mQuery.skip(); // reset offset
  const count = await mQuery.countDocuments(this._conditions).exec();

  const hasNext = count > parseInt(pages.length + offset);
  const pageParams = {
    count: Number(count),
    hasNext: Boolean(hasNext),
    page: Number(currentPage),
    perPage: Number(perPage),
  };

  return { pageParams, pages };
};

module.exports = (schema) => {
  schema.query.paginate = paginate;
};
