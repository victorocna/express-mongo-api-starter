require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const setupCors = require('./cors/setup-cors');
const router = require('./router');
const app = express();

const { connectToMongo } = require('./functions');
connectToMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET));

// custom cors config
app.use(setupCors());

// route everything
app.use('/', router);

module.exports = app;
