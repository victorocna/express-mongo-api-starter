import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { basename, extname } from 'path';
import { bucket, folder, region } from '../settings.json';

const s3Client = new S3Client({
  endpoint: `https://${region}.digitaloceanspaces.com`,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
  },
  forcePathStyle: false,
});

// Upload file to AWS or DigitalOcean
const upload = async (filename, data, options = {}) => {
  const key = createKey(filename);

  // Change folder name for development environments
  let folderName = folder;
  if (process.env.NODE_ENV !== 'production') {
    folderName = `${folder}-beta`;
  }

  const params = {
    Bucket: bucket,
    Key: `${folderName}/${key}`,
    Body: data,
  };

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
    Bucket: bucket,
    Key: `${folder}/${key}`,
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
  return `https://${bucket}.${region}.digitaloceanspaces.com/${filename}`;
};

const aws = {
  upload,
  remove,
  getPublicUrl,
};

export default aws;
