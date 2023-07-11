require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const setupCors = require('./cors/setup-cors');
const fileUpload = require('express-fileupload');
const { speedLimiter } = require('./middleware');
const router = require('./router');
const app = express();

const { connectToMongo } = require('./functions');
connectToMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(fileUpload());
app.use(cookieParser(process.env.COOKIE_SECRET));

// custom cors config
app.use(setupCors());

// add speed limiter for all requests
app.use(speedLimiter);

// route everything
app.use(router);

module.exports = app;
