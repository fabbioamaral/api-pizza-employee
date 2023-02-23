const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const isAuth = require('../middlewares/is-auth');

// GET /orders
router.get('/orders', isAuth, orderController.getOrders);

// POST /order
router.post('/order', isAuth, orderController.registerOrder);

// DELETE /order/:id
router.delete('/order/:id', isAuth, orderController.deleteOrder);

module.exports = router;