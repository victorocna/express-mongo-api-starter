const { isEmpty } = require('lodash');
const settings = require('../settings.json');

const invoiceLines = (products) => {
  if (isEmpty(products)) {
    throw new Error('Missing invoice lines');
  }

  const lines = [];
  for (const product of products) {
    lines.push({
      ...settings.lines,
      ...product,
    });
  }

  return lines;
};

module.exports = invoiceLines;
