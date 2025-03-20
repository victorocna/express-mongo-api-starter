import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import s3Client from './s3-client';

// Remove file from AWS or DigitalOcean
const remove = async (key) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: process.env.AWS_FOLDER ? `${process.env.AWS_FOLDER}/${key}` : key,
  };

  const command = new DeleteObjectCommand(params);
  try {
    return await s3Client.send(command);
  } catch (err) {
    console.error('Error removing from Digital Ocean', err);
    throw err;
  }
};

export default remove;
