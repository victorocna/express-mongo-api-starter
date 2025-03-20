import { GetObjectCommand } from '@aws-sdk/client-s3';
import s3Client from './s3-client';

// Download file from AWS or DigitalOcean
const download = async (key) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: process.env.AWS_FOLDER ? `${process.env.AWS_FOLDER}/${key}` : key,
  };

  const command = new GetObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    const data = await new Promise((resolve, reject) => {
      const chunks = [];
      response.Body.on('data', (chunk) => chunks.push(chunk));
      response.Body.on('error', (err) => reject(err));
      response.Body.on('end', () => resolve(Buffer.concat(chunks)));
    });
    return data;
  } catch (err) {
    console.error('Error downloading from DigitalOcean', err);
    throw err;
  }
};

export default download;
