const Employee = require('../models/employee');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.getEmployees = (req, res, next) => {
    Employee.findAll()
        .then(employees => {
            res.status(200).json({
                message: 'Fetched employees successfully.',
                employees
            });
        })
        .catch(err => {
            console.log('Error retrieving all employees!');
            console.log(err);
        });
}

exports.getEmployee = (req, res, next) => {
    const employeeId = req.params.id;
    Employee.findByPk(employeeId)
        .then(employee => {
            res.status(200).json({
                message: 'Fetched employee successfully.',
                employee
            });
        })
        .catch(err => {
            console.log('Error retrieving one specific employee!');
            console.log(err);
        });
}

exports.registerEmployee = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    const fullName = req.body.fullName;
    const role = req.body.role;
    const salary = req.body.salary;
    const cellphone = req.body.cellphone;
    const personalPhoto = req.body.personalPhoto;
    const address = req.body.address;

    Employee.create({
        fullName,
        role,
        salary,
        cellphone,
        personalPhoto,
        address
    })
        .then(result => {
            console.log('Employee added!');
            console.log(result);
            res.status(201).json({
                message: 'Employee has been created successfully.',
                employees: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
                }
                next(err);
        });
}

exports.updateEmployee = (req, res, next) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) { 
        const error = new Error('Validation failed, entered data is incorrect.'); 
        error.statusCode = 422; 
        throw error; 
    }
    const employeeId = req.params.employeeId;

    Employee.findByPk(employeeId)
        .then(employee => {
            if (!employee) {
                const error = new Error('Could not find employee.');
                error.statusCode = 404;
                throw error; 
            } else {
                const updatedFullName = req.body.fullName;
                const updatedRole = req.body.role;
                const updatedSalary = req.body.salary;
                const updatedCellphone = req.body.cellphone;
                const updatedPersonalPhoto = req.body.personalPhoto;
                const updatedAddress = req.body.address;
                
                return Employee.update(
                    { 
                        fullName: updatedFullName,
                        role: updatedRole,
                        salary: updatedSalary,
                        cellphone: updatedCellphone,
                        personalPhoto: updatedPersonalPhoto,
                        address: updatedAddress                
                    },
                    { where: { id: employeeId } }
                );                
            }
        }).then(result => {
            res.status(200).json({
                message: 'Employee updated successfully.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
              next(err);
        });
}

exports.deleteEmployee = (req, res, next) => {
    
    const accessType = req.accessType;
    if (accessType !== 'admin') {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
    }
    const employeeId = req.params.employeeId;
    Employee.findByPk(employeeId)
        .then(employee => {
            if (!employee) {
                const error = new Error('Could not find employee.');
                error.statusCode = 404;
                throw error;
            }

            return Employee.destroy({where: { id: employeeId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted employee.' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
              next(err);
        });
}