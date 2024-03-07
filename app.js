require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { connectToMongo, setupCors } = require('express-goodies');
const fileUpload = require('express-fileupload');
const router = require('./router');
const app = express();

// Connect to the database using a cached connection when available
connectToMongo();

// Configure express app
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Custom cors config
app.use(setupCors());

// Route everything
app.use(router);

module.exports = app;
