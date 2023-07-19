import bcryptjs from 'bcryptjs';

const { hashSync } = bcryptjs;

export default function hashPasswords(schema) {
  schema.pre('save', function () {
    if (this.password) {
      this.set({ password: hashSync(this.password, 10) });
    }
  });

  schema.pre('findOneAndUpdate', function () {
    if (this._update.password) {
      this.update({}, { password: hashSync(this._update.password, 10) });
    }
  });
}
