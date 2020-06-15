const serverless = require('serverless-http');
const connectToMongo = require('../functions/connect');
const app = require('../app');

module.exports = app;
module.exports.handler = async (event, context) => {
  await connectToMongo();
  return await serverless(app)(event, context);
};
