const Employee = require('../models/employee');
const bcrypt = require('bcryptjs');

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
    const fullName = req.body.fullName;
    const accessType = req.body.accessType;
    const email = req.body.email;
    const personalPhoto = req.body.personalPhoto;
    const password = req.body.password;
    bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
            Employee.create({
                fullName,
                accessType,
                email,
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
                    console.log('Error adding the employee!');
                    console.log(err);
                });
        });
}

exports.updateEmployee = (req, res, next) => {
    const employeeId = req.params.id;
    const updatedFullName = req.body.fullName;
    const updatedAccessType = req.body.accessType;
    const updatedPersonalPhoto = req.body.personalPhoto;
    Employee.findByPk(employeeId)
        .then(employee => {
            if (employee) {
                employee.fullName = updatedFullName;
                employee.accessType = updatedAccessType;
                employee.personalPhoto = updatedPersonalPhoto;
                return employee.save();
            }
        }).then(result => {
            res.status(200).json({
                message: 'Employee updated successfully.'
            });
        })
        .catch(err => {
            console.log('Error updating one specific employee!');
            console.log(err);
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