const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
// const { body } = require('express-validator/check');

router.post('/signup', authController.signup);

router.post('/login', authController.login);

module.exports = router;