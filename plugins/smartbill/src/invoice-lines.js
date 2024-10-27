import { isEmpty } from 'lodash';
import { lines as _lines } from '../settings.json';

const invoiceLines = (products) => {
  if (isEmpty(products)) {
    throw new Error('Missing invoice lines');
  }

  const lines = [];
  for (const product of products) {
    lines.push({
      ..._lines,
      ...product,
    });
  }

  return lines;
};

export default invoiceLines;
