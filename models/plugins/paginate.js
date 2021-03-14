const sliceAndDice = require('../../functions/slice-and-dice');

const paginate = async function (options) {
  const { limit, offset, sort } = sliceAndDice(options);

  const mQuery = this.find(this._conditions);
  mQuery.sort(sort);
  mQuery.skip(offset);
  mQuery.limit(limit);

  // @see https://mongoosejs.com/docs/tutorials/lean.html
  mQuery.lean(true);

  const documents = await mQuery.exec();

  mQuery.limit(); // reset limit
  mQuery.skip(); // reset offset
  const count = await mQuery.countDocuments(this._conditions).exec();

  return {
    count,
    hasNext: count > parseInt(documents.length + offset),
    offset: parseInt(limit + offset),
    documents,
  };
};

module.exports = (schema) => {
  schema.query.paginate = paginate;
};
