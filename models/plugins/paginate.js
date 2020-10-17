function paginate(query, options = {}) {
  const { limit, offset, select, sort, lean = true } = options;

  const mQuery = this.find(query);
  mQuery.select(select);
  mQuery.sort(sort);
  mQuery.lean(lean);

  mQuery.skip(offset);
  mQuery.limit(limit);

  const countPromise = this.countDocuments(query).exec();
  const docsPromise = mQuery.exec();

  return Promise.all([countPromise, docsPromise])
    .then((values) => {
      const [count, documents] = values;

      return Promise.resolve({
        count,
        hasNext: count > parseInt(documents.length + offset),
        offset: parseInt(limit + offset),
        documents,
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

module.exports = (schema) => {
  schema.statics.paginate = paginate;
};
