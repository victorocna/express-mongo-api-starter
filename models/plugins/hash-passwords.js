const bcrypt = require('bcryptjs');

module.exports = function hashPasswords(schema) {
  schema.pre('save', function () {
    if (this.password) {
      this.set({ password: bcrypt.hashSync(this.password, 10) });
    }
  });

  schema.pre('findOneAndUpdate', function () {
    if (this._update.password) {
      this.update({}, { password: bcrypt.hashSync(this._update.password, 10) });
    }
  });
};
