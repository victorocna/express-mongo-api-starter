# AWS Plugin

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

## Basic Usage

```js
import aws from '@plugins/aws';

// Upload files
await aws.upload(filename, data, options);

// Download files
await aws.download(filename);

// Remove files
await aws.remove(filename);

// Get public URL for files
aws.getPublicUrl(filename);
```

## Configuration

Before managing files with AWS or Digital Ocean Spaces you need to:

- Create a new bucket and folder name in AWS or Digital Ocean Spaces

That's it! 😊
