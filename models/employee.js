// const Sequelize = require('sequelize').Sequelize;
const { Sequelize } = require("sequelize");

const sequelize = require('../database');

const Employee = sequelize.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    salary: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
    },
    cellphone: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        unique: true        
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    personalPhoto: Sequelize.STRING

});

module.exports = Employee;