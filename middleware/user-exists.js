import { error } from '@functions';
import { Identity } from '@models';

export default async (req, res, next) => {
  const { email } = req.body;

  const identity = await Identity.findOne({ email });
  if (identity) {
    throw error(409, 'Account already exists');
  }

  next();
};
