module.exports = function qqq(schema) {
  schema.methods.toJSON = function() {
    const { _id: id, __v, ...rest } = this.toObject();
    return { id, ...rest };
  };
};
