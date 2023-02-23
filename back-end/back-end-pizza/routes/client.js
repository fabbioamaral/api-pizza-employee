const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');
const isAuth = require('../middlewares/is-auth');

// GET /clients
router.get('/clients', isAuth, clientController.getClients);

// GET /client/:phone
router.get('/client/:phone', isAuth, clientController.getClientByPhone);

// POST /client
router.post('/client', isAuth, clientController.addClient);

// PUT /client/:id
router.put('/client/:id', isAuth, clientController.updateClient);

// DELETE /client/:id
router.delete('/client/:id', isAuth, clientController.deleteClient);

module.exports = router;