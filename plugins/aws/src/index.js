const { basename, extname } = require('path');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const settings = require('../settings.json');

const s3Client = new S3Client({
  endpoint: `https://${settings.region}.digitaloceanspaces.com`,
  region: settings.region,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
  },
  forcePathStyle: false,
});

// Set the folder for the environment
settings.folder = settings.folder[process.env.NODE_ENV] || settings.folder['development'];

const getLogKey = (timestamp) => {
  return `log-${timestamp.toISOString()}.txt`;
};

// Upload file to AWS or DigitalOcean
const upload = async (key, data, options = {}, type) => {
  const params = {
    Bucket: settings.bucket,
    Body: data,
  };
  if (type) {
    params.Key = `${settings.logsFolder}/${key}`;
  } else params.Key = `${settings.folder}/${key}`;

  // Set params for public files
  if (options?.public) {
    params.ACL = 'public-read';
  }

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
const createKey = ({ name: filename, size: suffix, extension, timestamp = Date.now() }) => {
  let ext = extname(filename);
  const normalized = filename.toLowerCase().replaceAll(' ', '-');
  const file = basename(normalized, ext);
  if (extension) {
    ext = extension;
  }
  //extension already has "."
  if (suffix) {
    return `${file}-${timestamp}-${suffix}${ext}`;
  } else {
    return `${file}-${timestamp}${ext}`;
  }
};

// Get the key from the full path
const getKey = (path) => {
  return basename(path);
};

// Get the public URL of the file
const getPublicUrl = (filename) => {
  return `https://${settings.bucket}.${settings.region}.digitaloceanspaces.com/${settings.folder}/${filename}`;
};

const aws = {
  upload,
  remove,
  getPublicUrl,
  createKey,
  getKey,
  getLogKey,
};

module.exports = aws;
