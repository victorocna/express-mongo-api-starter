module.exports = (schema) => {
  return async function (req, res, next) {
    try {
      // validate request body
      // will also trim string values if specified in the yup schema
      req.body = await schema.validate(req.body);
      next();
    } catch (error) {
      res.statusCode = 400;
      next(error);
    }
  };
};
