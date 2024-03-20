import { sendEmail } from '../plugins/postmark/src';
import { expect } from 'chai';

it('Sends an email', async () => {
  // Arrange
  const payload = {
    type: 'contact',
    to: 'office@email.com',
    subject: 'Hello world',
    message: 'This is a test message',
  };

  // Act
  const response = await sendEmail(payload);

  // Assert
  expect(response).to.be.an('object');
  expect(response?.ErrorCode).to.equal(0);
  expect(response?.Message).to.equal('OK');
});
