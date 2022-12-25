const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees');
const { body } = require('express-validator');
const isAuth = require('../middlewares/is-auth');

// GET /employees
router.get('/employees', isAuth, employeesController.getEmployees);

// GET /employee/:employeeId
router.get('/employee/:employeeId', isAuth, employeesController.getEmployee);

// POST /employee
router.post('/employee', isAuth, [
    body('fullName')
        .trim()
        .isLength({ min: 5 }),
], employeesController.registerEmployee);

// PUT /employee/:employeeId
router.put('/employee/:employeeId', isAuth, [
    body('fullName')
        .trim()
        .isLength({ min: 5 }),
], employeesController.updateEmployee);

// DELETE /employee/:employeeId
router.delete('/employee/:employeeId', isAuth, employeesController.deleteEmployee);

module.exports = router;