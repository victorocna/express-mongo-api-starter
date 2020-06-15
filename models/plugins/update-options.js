module.exports = function updateOptions(schema) {
  schema.pre('findOneAndUpdate', function(next) {
    this.options.new = true;
    this.options.runValidators = true;
    next();
  });
};
