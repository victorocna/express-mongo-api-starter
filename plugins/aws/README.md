# AWS Plugin

## Dependencies

- `@aws-sdk/client-s3` [NPM package](https://www.npmjs.com/package/@aws-sdk/client-s3)

## Environment variables

- `AWS_ACCESS_KEY`: AWS or Digital Ocean Spaces access key
- `AWS_ACCESS_SECRET`: AWS or Digital Ocean Spaces secret access key

## Basic Usage

```js
const aws = require('../plugins/aws/src');

// Upload files
await aws.upload(filename, data);

// Remove files
await aws.remove(filename);

// Get public URL for files
aws.getPublicUrl(filename)
```

## Configuration

Before managing files with AWS or Digital Ocean Spaces you need to:

- Create a new bucket and folder name in AWS or Digital Ocean Spaces

That's it! 😊
