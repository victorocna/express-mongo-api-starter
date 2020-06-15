require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// allow CORS only from app URL
app.use(cors({ origin: process.env.APP_BASE_URL }));

module.exports = app;
