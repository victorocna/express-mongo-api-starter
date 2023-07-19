import { config } from 'dotenv';
import { describe } from 'mocha';
import awsTest from './aws.test';
import netopiaTest from './netopia.test';
import postmarkTest from './postmark.test';
import smartbillTest from './smartbill.test';

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
