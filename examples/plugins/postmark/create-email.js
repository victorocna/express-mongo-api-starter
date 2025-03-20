import { compile } from 'handlebars';

const createEmail = async (props, view) => {
  const { from, to, type, subject, message, data = {} } = props;
  if (!type || !to || !subject) {
    throw new Error('Missing required params');
  }

  // Prepend some data to be used in the email templates
  data.app_base_url = process.env.APP_BASE_URL;
  data.email_support = process.env.POSTMARK_FROM;
  data.subject = subject;
  data.message = message;

  // Compile handlebars template
  if (!view) {
    throw new Error('Invalid email type');
  }
  const template = compile(view);

  return {
    From: from || process.env.POSTMARK_FROM,
    HtmlBody: template(data),
    Subject: subject,
    To: to,
  };
};

export default createEmail;
