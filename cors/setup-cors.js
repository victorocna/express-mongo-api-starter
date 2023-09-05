import origin from './origin';
import cors from 'cors';

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
