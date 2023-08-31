const paginate = async function ({
  sort,
  per_page: perPage = 20,
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

  // Calculate the offset for pagination
  const offset = (currentPage - 1) * perPage;

  // Create a query for MongoDB using Mongoose
  const mQuery = this.find(this._conditions);

  // Set sorting options
  if (sort) {
    mQuery.sort(sort);
  } else {
    mQuery.sort({ [order]: direction });
  }

  // Apply pagination options and make the query "lean"
  mQuery.skip(offset).limit(perPage).lean(true);

  // Execute both queries concurrently
  const [pages, count] = await Promise.all([
    mQuery.exec(),
    mQuery.model.countDocuments(this._conditions),
  ]);

  // Calculate whether there are more pages to display
  const hasNext = count > Number(offset + pages.length);

  // Create an object with pagination information
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
