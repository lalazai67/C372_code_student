const MockProvider = require('../services/mockPaymentProvider');
const services = require('../data/mockServices');

function preparePayment(req, res) {
  const serviceId = Number(req.query.serviceID);
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  module.exports = {
  preparePayment,
  createMockPayment
};


  res.status(200).json({
    serviceId: service.id,
    serviceName: service.name,
    amount: service.price,
    currency: 'sgd',
    status: 'READY_FOR_PAYMENT'
  });
}

module.exports = { preparePayment };
