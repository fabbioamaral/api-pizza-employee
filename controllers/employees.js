const Employee = require('../models/employee');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');

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
    const password = req.body.password;
    const personalPhoto = req.body.personalPhoto;
    bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
            Employee.create({
                fullName,
                role,
                salary,
                cellphone,
                password: hashedPassword,
                personalPhoto
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
        });
}

exports.updateEmployee = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    const employeeId = req.params.id;
    const updatedFullName = req.body.fullName;
    const role = req.body.role;
    const salary = req.body.salary;
    const cellphone = req.body.cellphone;
    const password = req.body.password;
    const personalPhoto = req.body.personalPhoto;
    Employee.findByPk(employeeId)
        .then(employee => {
            if (employee) {
                employee.fullName = updatedFullName;
                employee.role = role;
                employee.salary = salary;
                employee.cellphone = cellphone;
                employee.password = password;
                employee.personalPhoto = updatedPersonalPhoto;
                return employee.save();
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
    const accessType = req.params.accessType;
    if (accessType !== 'admin') {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
    }
    const employeeId = req.params.id;
    Employee.findByPk(employeeId)
        .then(employee => {
            if (!employee) {
                const error = new Error('Could not find post.');
                error.statusCode = 404;
                throw error;
            }

            return Employee.destroy({where: employeeId});
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted employee.' });
        })
        .catch(err => {
            console.log('Error deleting employee.');
        });
}