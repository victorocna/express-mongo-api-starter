const { basename, extname } = require('path');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const settings = require('../settings.json');

const s3Client = new S3Client({
  endpoint: `https://${settings.region}.digitaloceanspaces.com`,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
  },
  forcePathStyle: false,
});

// Upload file to AWS or DigitalOcean
const upload = async (filename, data) => {
  const key = createKey(filename);
  const params = {
    Bucket: settings.bucket,
    Key: `${settings.folder}/${key}`,
    Body: data,
    ACL: 'public-read',
  };

  const command = new PutObjectCommand(params);
  try {
    return await s3Client.send(command);
  } catch (err) {
    console.error('Error uploading to DigitalOcean', err);
    throw err;
  }
};

// Remove file from AWS or DigitalOcean
const remove = async (filename) => {
  const key = getKey(filename);
  const params = {
    Bucket: settings.bucket,
    Key: `${settings.folder}/${key}`,
  };

  const command = new DeleteObjectCommand(params);
  try {
    return await s3Client.send(command);
  } catch (err) {
    console.error('Error removing from DigitalOcean', err);
    throw err;
  }
};

// Create an unique key for the file
const createKey = (filename) => {
  const extension = extname(filename);
  const timestamp = Date.now();
  const normalized = filename.toLowerCase().replaceAll(' ', '-');
  const file = basename(normalized, extension);

  return `${file}-${timestamp}.${extension}`;
};

// Get the key from the full path
const getKey = (path) => {
  return basename(path);
};

// Get the public URL of the file
const getPublicUrl = (filename) => {
  return `https://${settings.bucket}.${settings.region}.digitaloceanspaces.com/${filename}`;
};

const aws = {
  upload,
  remove,
  getPublicUrl,
};

module.exports = aws;
