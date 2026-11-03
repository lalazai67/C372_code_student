const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/payment/prepare/:serviceId', paymentController.preparePayment);

router.post(
   '/payments/mock/:serviceId',
   paymentController.createMockPayment
 );


module.exports = router;
