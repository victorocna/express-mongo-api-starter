# Postmark Plugin

## Dependencies

- `postmark` [NPM package](https://www.npmjs.com/package/postmark)

## Environment variables

- `POSTMARK_FROM`: The Postmark sender email address
- `POSTMARK_SECRET`: The Postmark API secret

## Configuration

Before sending emails with Postmark for `example.com` domain you need to:

- Navigate to the [Servers page](https://account.postmarkapp.com/servers) and create a new server `example.com`
- Navigate to the [Sender Signatures page](https://account.postmarkapp.com/signature_domains) and add the `example.com` domain
- Navigate to the DNS settings of `example.com` domain at its hosting provider and add the new TXT and CNAME records
- Navigate back to the [Sender Signatures page](https://account.postmarkapp.com/signature_domains) and verify the DNS settings

After following these steps you should be able to send emails with Postmark!
