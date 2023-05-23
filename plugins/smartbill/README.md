# Smartbill Plugin

## Dependencies

No extra dependencies needed 😊

## Environment variables

- `SMARTBILL_CUI`: Company identification code
- `SMARTBILL_TOKEN`: Smartbill secret token
- `SMARTBILL_USERNAME`: Smartbill login username

## Configuration

Before accepting invoices with Smartbill you need to:

- Setup for a new account using your company's CIF/CUI
- Setup an invoice series for production (eg: `ACME`) and an invoice series for tests (eg: `TEST`)

After following these steps you should be able to issue invoices with Smartbill!
