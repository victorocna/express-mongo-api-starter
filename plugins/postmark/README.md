# Postmark Plugin

Quick start

1. Install dependencies
2. Setup environment variables
3. Add your own email templates in the `plugins/postmark/views` folder
4. See basic usage and send your first email

## Dependencies

- `postmark` [NPM package](https://www.npmjs.com/package/postmark)
- `handlebars` [NPM package](https://www.npmjs.com/package/handlebars)

## Environment variables

- `POSTMARK_FROM`: The Postmark sender email address
- `POSTMARK_SECRET`: The Postmark API secret

## Basic usage

```js
import postmark from '@plugins/postmark/src';

// Send an email
await postmark.sendEmail({
  type: 'contact',
  to: 'office@email.com',
  subject: 'Hello world',
  message: 'This is a test message',
});
```

## Configuration

Before sending emails with Postmark for `example.com` domain you need to:

- Navigate to the [Servers page](https://account.postmarkapp.com/servers) and create a new server `example.com`
- Navigate to the [Sender Signatures page](https://account.postmarkapp.com/signature_domains) and add the `example.com` domain
- Navigate to the DNS settings of `example.com` domain at its hosting provider and add the new TXT and CNAME records
- Navigate back to the [Sender Signatures page](https://account.postmarkapp.com/signature_domains) and verify the DNS settings

After following these steps you should be able to send emails with Postmark!
