import { Identity } from '@models';
import { error as ErrorModel } from 'express-goodies/mongoose';
import { isEmpty, pick } from 'lodash';

export default async (req, res) => {
  if (!req.body?.data || !req.body?.pathname) {
    return res.status(400).json('Missing required params for error caught by client-side');
  }

  const identity = await Identity.findById(req.body?.user?.me).lean();
  let user;
  if (!isEmpty(identity)) {
    user = pick(identity, ['name', '_id']);
  } else {
    user = null;
  }

  // Error model from express-goodies
  const document = ErrorModel.create({
    data: req.body.data,
    pathname: req.body.pathname,
    user,
  });

  return res.status(200).json({ message: 'Error was saved successfully', data: document });
};
