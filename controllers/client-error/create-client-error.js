const ErrorModel = require('express-goodies/mongoose/models/error');
const { pick } = require('lodash');

module.exports = async (req, res) => {
  if (!req.body?.data || !req.body?.pathname) {
    return res.status(400).json('Missing required params for error caught by client-side.');
  }
  let user;
  if (req.user?._id) {
    user = pick(req.user, ['name', 'email', '_id']);
  } else {
    user = null;
  }

  // Error model from express-goodies
  const document = ErrorModel.create({
    data: req.body.data,
    pathname: req.body.pathname,
    user: user,
  });

  return res.status(200).json({ message: 'Error was saved successfully', data: document });
};
