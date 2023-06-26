const { addDays } = require('date-fns');
const invoiceLines = require('./invoice-lines');
const settings = require('../settings.json');

const invoiceBody = (data) => {
  const { createdAt, dueAt, payer, series, type } = data;
  if (!type) {
    throw new Error('Missing invoice type');
  }

  const payload = {
    ...settings.body,
    companyVatCode: process.env.SMARTBILL_CUI,
    client: {
      name: payer?.name,
      address: payer?.address,
      email: payer?.email,
      phone: payer?.phone,
      vatCode: payer?.cui,
      country: 'Romania',
      saveToDb: false,
      isTaxPayer: false,
    },
    dueDate: dueAt || addDays(Date.now(), 14),
    isDraft: false,
    issueDate: createdAt || Date.now(),
    precision: 2,
    products: invoiceLines(data),
    seriesName: series,
  };

  // Special payload for development environments
  if (process.env.NODE_ENV !== 'production') {
    payload.seriesName = 'TEST';
    payload.isDraft = true;
  }

  return payload;
};

module.exports = invoiceBody;
