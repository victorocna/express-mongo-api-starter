require('dotenv').config();

describe('Test Postmark plugin', () => {
  require('./postmark.test');
});

describe('Test Netopia plugin', () => {
  require('./netopia.test');
});

describe('Test Smartbill plugin', () => {
  require('./smartbill.test');
});

describe('Test AWS plugin', () => {
  require('./aws.test');
});
