import { error } from '@functions';
import { Identity } from '@models';

export default async (req, res, next) => {
  const { email } = req.body;

  const identity = await Identity.findOne({ email });
  if (!identity) {
    throw error(404, 'Account does not exist');
  }

  next();
};
