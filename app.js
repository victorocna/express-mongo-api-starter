import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import 'express-async-errors';
import fileUpload from 'express-fileupload';
import { connectToMongo, setupCors } from 'express-goodies';
import helmet from 'helmet';
import router from './router';

const app = express();

// Connect to the database using a cached connection when available
connectToMongo();

// Configure express app
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(helmet());
app.use(fileUpload());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Custom cors config
app.use(setupCors());

// Route everything
app.use(router);

export default app;
