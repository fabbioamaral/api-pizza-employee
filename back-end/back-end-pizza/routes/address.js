const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address');
const isAuth = require('../middlewares/is-auth');

// GET /address/:id
router.get('/address/:id', isAuth, addressController.getAddressesByClient);

// POST /address
router.post('/address', isAuth, addressController.addAddress);

// PUT /address/:id
router.put('/address/:id', isAuth, addressController.updateAddress);

// DELETE /address/:id
router.delete('/address/:id', isAuth, addressController.deleteAddress);

module.exports = router;