const express = require('express');
const router = express.Router();
const deliverFeeController = require('../controllers/delivery-fee');
const isAuth = require('../middlewares/is-auth');

// GET /deliver-fees
router.get('/deliver-fees', isAuth, deliverFeeController.getDeliveryFees);

// GET /deliver-fee/:id
router.get('/deliver-fee/:id', isAuth, deliverFeeController.getDeliveryFee);

// POST /deliver-fee
router.post('/deliver-fee', isAuth, deliverFeeController.registerDeliveryFee);

// PUT /deliver-fee/:id
router.put('/deliver-fee/:id', isAuth, deliverFeeController.updateDeliverFee);

// DELETE /deliver-fee/:id
router.delete('/deliver-fee/:id', isAuth, deliverFeeController.deleteDeliveryFee);

module.exports = router;