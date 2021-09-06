require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const origin = require('./cors/origin');
const connectToMongo = require('./functions/connect');
const router = require('./router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET));

// custom cors config
app.use(cors({ origin, credentials: true }));

// route everything
app.use('/', router);

// finally, connect to database
connectToMongo();

module.exports = app;
