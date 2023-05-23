const Netopia = require('netopia-card');
const settings = require('../settings.json');

const createOrder = async ({ amount, orderId, clientData }) => {
  const netopia = new Netopia();

  netopia.setClientBillingData(clientData);
  netopia.setClientShippingData(clientData);

  netopia.setPaymentData({
    amount,
    orderId,
    confirmUrl: process.env.NETOPIA_CONFIRM_URL,
    returnUrl: process.env.NETOPIA_RETURN_URL,
    ...settings,
  });

  return netopia.buildRequest();
};

module.exports = createOrder;
