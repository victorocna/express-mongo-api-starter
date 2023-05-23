const handlebars = require('handlebars');
const views = require('../views');

const loadTemplate = ({ name, data, type }) => {
  if (!name || !type) {
    throw new Error('Missing required params to send the email');
  }

  const template = handlebars.compile(views[type]);
  return template(data);
};

module.exports = loadTemplate;
