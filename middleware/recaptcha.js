const axios = require('axios');
const { error } = require('../functions');

module.exports = async (req, res, next) => {
  try {
    // allow requests with no origin from postman / others
    if (!req.headers.origin) {
      return next();
    }

    if (!req.body['g-recaptcha-response']) {
      throw error(400, 'reCAPTCHA field missing');
    }

    const recaptcha = await axios({
      method: 'post',
      url: 'https://www.recaptcha.net/recaptcha/api/siteverify',
      params: {
        secret: process.env.RECAPTCHA_SECRET,
        response: req.body['g-recaptcha-response'],
      },
      timeout: 3000,
    });

    const data = recaptcha.data || {};
    if (!data.success) {
      throw error(400, 'reCAPTCHA validation failed');
    }

    return next();
  } catch (err) {
    return next(err);
  }
};
