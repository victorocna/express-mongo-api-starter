import { config } from 'dotenv';
import { describe } from 'mocha';
import awsTest from './aws.test.js';
import netopiaTest from './netopia.test.js';
import postmarkTest from './postmark.test.js';
import smartbillTest from './smartbill.test.js';

config();

describe('Test Postmark plugin', () => {
  postmarkTest();
});

describe('Test Netopia plugin', () => {
  netopiaTest();
});

describe('Test Smartbill plugin', () => {
  smartbillTest();
});

describe('Test AWS plugin', () => {
  awsTest();
});
