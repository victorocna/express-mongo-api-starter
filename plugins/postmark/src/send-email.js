const { Client } = require('postmark');
const { logger } = require('../../../lib');
const createEmail = require('./create-email');
const emailCallback = require('./email-callback');

const sendEmail = async (data) => {
  try {
    const client = new Client(process.env.POSTMARK_SECRET);
    const payload = await createEmail(data);

    return await client.sendEmail(payload, emailCallback);
  } catch (err) {
    logger.error('Postmark error', err.name, err.message);
  }
};

module.exports = sendEmail;
