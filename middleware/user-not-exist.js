import { error } from '../functions/index.js';
import { Identity } from '../models/index.js';

export default async (req, res, next) => {
  const { email } = req.body;

  const identity = await Identity.findOne({ email });
  if (!identity) {
    throw error(404, 'Account does not exist');
  }

  next();
};
