const Netopia = require('netopia-card');
const { Order } = require('../../../models');

const confirmOrder = async (envKey, data) => {
  const netopia = await new Netopia().validatePayment(envKey, data);
  const { action, errorMessage, order, res: response } = netopia;

  const orderId = order?.$?.id;
  if (!orderId) {
    throw new Error('Error! Order id not found');
  }

  const document = await Order.findOne({ _id: orderId });
  if (!document) {
    throw new Error('Error! Order not found');
  }

  // Do not process the same order twice (Netopia can call this endpoint multiple times)
  if (document?.status === 'approved') {
    throw new Error('Error! Order was already approved');
  }

  // Mark order as processed
  await document.updateOne({ processed: true });

  switch (action) {
    case 'confirmed':
      // Avem certitudinea ca banii au plecat din contul posesorului de card si facem update al starii comenzii si livrarea produsului.
      await document.updateOne({ status: 'approved' });
      break;
    case 'confirmed_pending':
      // Tranzactia este in curs de verificare antifrauda. Nu facem livrare/expediere.
      // In urma trecerii de aceasta verificare se va primi o noua notificare pentru o actiune de confirmare sau anulare.
      await document.updateOne({ status: 'pending' });
      break;
    case 'paid_pending':
      // Tranzactia este in curs de verificare. Nu facem livrare/expediere.
      // In urma trecerii de aceasta verificare se va primi o noua notificare pentru o actiune de confirmare sau anulare.
      await document.updateOne({ status: 'pending' });
      break;
    case 'paid':
      // Tranzactia este in curs de procesare. Nu facem livrare/expediere.
      // In urma trecerii de aceasta procesare se va primi o noua notificare pentru o actiune de confirmare sau anulare.
      await document.updateOne({ status: 'open' });
      break;
    case 'canceled':
      // Tranzactia este anulata. Nu facem livrare/expediere.
      await document.updateOne({ status: 'canceled' });
      break;
    case 'credit':
      // Banii sunt returnati posesorului de card. Daca s-a facut deja livrare, aceasta trebuie oprita sau facut un reverse.
      await document.updateOne({ status: 'refunded' });
      break;
    default:
      await document.updateOne({ status: 'rejected', reason: errorMessage });
  }

  return response;
};

module.exports = confirmOrder;
