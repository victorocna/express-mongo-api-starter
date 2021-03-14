module.exports = function validate(schema) {
  schema.pre('findOneAndUpdate', function (next) {
    this.options.new = true;
    this.options.runValidators = true;
    next();
  });
};
