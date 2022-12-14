const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees');

// GET /employees
router.get('/employees', employeesController.getEmployees);

// GET /employee/:employeeId
router.get('/employee/:employeeId', employeesController.getEmployee);

// POST /employee
router.post('/employee', employeesController.registerEmployee);

// PUT /employee/:employeeId
router.put('/employee/:employeeId', employeesController.updateEmployee);

// DELETE /employee/:employeeId
router.delete('/employee/:employeeId', employeesController.deleteEmployee);

module.exports = router;