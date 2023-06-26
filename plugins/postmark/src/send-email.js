const { Client } = require('postmark');
const createEmail = require('./create-email');

const sendEmail = async (data) => {
  try {
    const client = new Client(process.env.POSTMARK_SECRET);
    const payload = await createEmail(data);

    return await client.sendEmail(payload);
  } catch (err) {
    console.error('Postmark error', err.name, err.message);
  }
};

module.exports = sendEmail;
