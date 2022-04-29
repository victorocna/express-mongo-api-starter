const xmldom = require('xmldom').DOMParser;

const parseDOM = (data) => {
  // @see https://stackoverflow.com/a/56213118
  const options = {
    locator: {},
    errorHandler: { warning: function () {} },
    error: function () {},
  };

  const html = data.replace('http://www.w3.org/1999/xhtml', '');
  return new xmldom(options).parseFromString(html);
};

const dom = {
  parse: parseDOM,
};

module.exports = dom;
