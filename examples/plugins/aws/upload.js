import { PutObjectCommand } from '@aws-sdk/client-s3';
import s3Client from './s3-client';

// Upload file to AWS or DigitalOcean
const upload = async (key, data, options = {}) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: process.env.AWS_FOLDER ? `${process.env.AWS_FOLDER}/${key}` : key,
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
    console.error('Error uploading to Digital Ocean', err);
    throw err;
  }
};

export default upload;
