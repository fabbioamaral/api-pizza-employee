const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { body } = require('express-validator/check');

router.post('/signup',[
    body('email')
        .trim()
        .isEmail(),
    body('password')
        .isLength({min: 6})
], authController.signup);

router.post('/login', [
    body('email')
    .trim()
    .isEmail(),
    body('password')
    .isLength({min: 6})
], authController.login);

module.exports = router;