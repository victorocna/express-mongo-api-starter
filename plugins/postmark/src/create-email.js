const loadSubject = require('./load-subject');
const loadTemplate = require('./load-template');

const createEmail = async ({ name, type, to, data = {} }) => {
  const payload = {
    data: {
      ...data,
      app_base_url: process.env.APP_BASE_URL,
      email_support: process.env.POSTMARK_FROM,
    },
    name,
    type,
  };
  const HtmlBody = loadTemplate(payload);
  const Subject = loadSubject(HtmlBody);

  return {
    From: process.env.POSTMARK_FROM,
    HtmlBody,
    Subject,
    To: to,
  };
};

module.exports = createEmail;
