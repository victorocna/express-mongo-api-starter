const { expect } = require('chai');
const postmark = require('../plugins/postmark/src');

it('Sends an email', async () => {
  // Arrange
  const payload = {
    type: 'contact',
    to: 'office@email.com',
    subject: 'Hello world',
    message: 'This is a test message',
  };

  // Act
  const response = await postmark.sendEmail(payload);

  // Assert
  expect(response).to.be.an('object');
  expect(response?.ErrorCode).to.equal(0);
  expect(response?.Message).to.equal('OK');
});
