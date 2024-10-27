import { compile } from 'handlebars';
import * as views from '../views';

const createEmail = async ({ from, to, type, subject, message, data = {} }) => {
  if (!type || !to || !subject) {
    throw new Error('Missing required parameters');
  }

  // Prepend some data to be used in the email templates
  data.app_base_url = process.env.APP_BASE_URL;
  data.email_support = process.env.POSTMARK_FROM;
  data.subject = subject;
  data.message = message;

  // Compile handlebars template
  if (!views[type]) {
    throw new Error('Invalid email type');
  }
  const template = compile(views[type]);

  return {
    From: from || process.env.POSTMARK_FROM,
    HtmlBody: template(data),
    Subject: subject,
    To: to,
  };
};

export default createEmail;
