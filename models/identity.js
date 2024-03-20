import { Schema, model } from 'mongoose';
import validator from 'validator';
import { hashPasswords, paginate, validate } from './plugins';

/**
 * Identities manage login related operations
 */
const name = 'identity';
const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => validator.isEmail(value),
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    retries: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirmedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Set schema plugins
schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

export default model(name, schema);
