const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees');
const { body } = require('express-validator');

// GET /employees
router.get('/employees', employeesController.getEmployees);

// GET /employee/:employeeId
router.get('/employee/:employeeId', employeesController.getEmployee);

// POST /employee
router.post('/employee', [
    body('fullName')
        .trim()
        .isLength({ min: 5 }),
], employeesController.registerEmployee);

// PUT /employee/:employeeId
router.put('/employee/:employeeId', [
    body('fullName')
        .trim()
        .isLength({ min: 5 }),
], employeesController.updateEmployee);

// DELETE /employee/:employeeId
router.delete('/employee/:employeeId', employeesController.deleteEmployee);

module.exports = router;