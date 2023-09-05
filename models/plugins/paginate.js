const paginate = async function ({
  sort,
  per_page: perPage = 30,
  page: currentPage = 1,
  order = 'createdAt',
  direction = -1,
} = {}) {
  // make sure these params are numbers
  perPage = Number(perPage);
  currentPage = Number(currentPage);

  if (isNaN(perPage)) {
    throw new Error('Paginate error: per_page must be a number');
  }
  if (isNaN(currentPage)) {
    throw new Error('Paginate error: page must be a number');
  }
  if (perPage > 300) {
    throw new Error('Paginate error: too many results');
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

  const mQuery = this.find(this._conditions);
  const offset = (currentPage - 1) * perPage;

  if (sort) {
    mQuery.sort(sort);
  } else {
    mQuery.sort({ [order]: direction });
  }
  mQuery.skip(offset);
  mQuery.limit(perPage);

  // @see https://mongoosejs.com/docs/tutorials/lean.html
  mQuery.lean(true);

  const pages = await mQuery.exec();

  mQuery.limit(); // reset limit
  mQuery.skip(); // reset offset
  const count = await mQuery.countDocuments(this._conditions).exec();

  const hasNext = count > Number(pages.length + offset);
  const pageParams = {
    count: Number(count),
    hasNext: Boolean(hasNext),
    page: Number(currentPage),
    perPage: Number(perPage),
  };

  return { pageParams, pages };
};

export default (schema) => {
  schema.query.paginate = paginate;
};
