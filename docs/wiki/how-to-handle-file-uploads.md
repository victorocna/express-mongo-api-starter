# How to handle file uploads

This short tutorial will explain how to handle file uploads.

## Guidelines

- Use `express-fileupload`, do NOT use `multer`
- The `express-fileupload` NPM package makes any file accessible in `req.files` request object.
- Whenever possible, the request body should contain only the file to be uploaded, nothing else.

## Dependencies

- `@aws-sdk/client-s3` [NPM package](https://www.npmjs.com/package/@aws-sdk/client-s3)

## Environment variables

`.env.example`

```bash
AWS_ACCESS_KEY="DOad1422dfet22r2t"
AWS_ACCESS_SECRET="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
AWS_BUCKET="bucket-name"
AWS_ENDPOINT="https://nyc3.digitaloceanspaces.com"
AWS_FOLDER="folder-name" # optional folder name, leave empty for root
AWS_REGION="nyc3"
```
