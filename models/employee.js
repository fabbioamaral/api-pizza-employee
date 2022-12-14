const Sequelize = require('sequelize').Sequelize;

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
    acessType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true        
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    personalPhoto: Sequelize.STRING

});

module.exports = Employee;