import { error as ErrorModel } from 'express-goodies/mongoose';

export default async (req, res) => {
  const { data, pathname, user } = req.body;
  if (!data || !pathname) {
    return res.status(400).json('Missing required params');
  }

  // Update user props when user exists
  if (user && user.me) {
    user._id = user.me;
  }

  // Error model from express-goodies
  const document = await ErrorModel.create({ data, pathname, user });

  return res.status(200).json({
    data: document,
    message: 'Error logged successfully',
  });
};
