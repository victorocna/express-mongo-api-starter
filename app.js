import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import 'express-async-errors';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import setupCors from './cors/setup-cors.js';
import { connectToMongo } from './functions/index.js';
import { speedLimiter } from './middleware/index.js';
import router from './router.js';

const app = express();

connectToMongo();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(helmet());
app.use(fileUpload());
// eslint-disable-next-line no-undef
app.use(cookieParser(process.env.COOKIE_SECRET));

// custom cors config
app.use(setupCors());

// add speed limiter for all requests
app.use(speedLimiter);

// route everything
app.use(router);

export default app;
