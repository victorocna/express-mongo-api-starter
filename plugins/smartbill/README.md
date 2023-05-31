# Smartbill Plugin

## Dependencies

- `date-fns` [NPM package](https://www.npmjs.com/package/date-fns)
- `lodash` [NPM package](https://www.npmjs.com/package/lodash)

## Environment variables

- `SMARTBILL_CUI`: Company identification code
- `SMARTBILL_TOKEN`: Smartbill secret token
- `SMARTBILL_USERNAME`: Smartbill login username

## Basic usage

```js
const smartbill = require('../plugins/smartbill/src');

// Create Smartbill invoice
await smartbill.createInvoice(data);
```

## Configuration

Before accepting invoices with Smartbill you need to:

- Setup for a new account using your company's CIF/CUI
- Setup an invoice series for production (eg: `ACME`) and an invoice series for tests (eg: `TEST`)

After following these steps you should be able to issue invoices with Smartbill!
