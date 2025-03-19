import { Identity } from '@models';
import { error as ErrorModel } from 'express-goodies/mongoose';
import { isEmpty, pick } from 'lodash';

export default async (req, res) => {
  const { data, pathname } = req.body;
  const { me } = req.user;

  if (!data || !pathname) {
    return res.status(400).json('Missing required params');
  }

  const identity = await Identity.findById(me).lean();
  let user;
  if (!isEmpty(identity)) {
    user = pick(identity, ['name', '_id']);
  } else {
    user = null;
  }

  // Error model from express-goodies
  const document = ErrorModel.create({ data, pathname, user });

  return res.status(200).json({
    data: document,
    message: 'Error logged successfully',
  });
};
