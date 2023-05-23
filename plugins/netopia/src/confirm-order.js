const Netopia = require('netopia-card');
const { Order } = require('../../../models');
const { error } = require('../../../functions');

module.exports = async (req, res) => {
  const { data, env_key } = req.body;
  const netopia = await new Netopia().validatePayment(env_key, data);
  const { action, errorMessage, order, res: response } = netopia;

  const orderId = order?.$?.id;
  if (!orderId) {
    throw error(400, 'Error! Order id not found');
  }

  const document = await Order.findOne({ _id: orderId });
  if (!document) {
    throw error(404, 'Error! Order not found');
  }

  // Do not process the same order twice (Netopia can call this endpoint multiple times)
  if (document?.status === 'approved') {
    throw error(400, 'Error! Order was already approved');
  }

  switch (action) {
    case 'confirmed':
    case 'paid':
      await document.updateOne({ status: 'approved', processed: true });
      break;
    case 'confirmed_pending':
    case 'paid_pending':
      await document.updateOne({ status: 'pending', processed: true });
      break;
    default:
      await document.updateOne({ status: 'rejected', processed: true, reason: errorMessage });
  }

  return res.status(200).set(response.set.key, response.set.value).send(response.send);
};
