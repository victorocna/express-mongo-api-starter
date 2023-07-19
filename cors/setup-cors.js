import cors from 'cors';
import origin from './origin.js';

const setupCors = () => {
  return cors({
    origin,
    credentials: true,
    exposedHeaders: [
      'Content-Disposition',
      // add exposed headers here
    ],
  });
};

export default setupCors;
