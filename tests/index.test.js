import 'dotenv/config';
import { describe } from 'mocha';
import awsTest from './aws.test';
import netopiaTest from './netopia.test';
import postmarkTest from './postmark.test';
import smartbillTest from './smartbill.test';

describe('Test Postmark plugin', function () {
  postmarkTest();
});

describe('Test NETOPIA plugin', function () {
  netopiaTest();
});

describe('Test Smartbill plugin', function () {
  smartbillTest();
});

describe('Test AWS plugin', function () {
  awsTest();
});
