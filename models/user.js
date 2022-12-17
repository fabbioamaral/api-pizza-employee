const Sequelize = require('sequelize');

const sequelize = require('../database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        required: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    accessType: {
        // TO-DO: achar uma forma de só aceitar determinadas strings
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    profilePicture: {
        type: Sequelize.STRING,
        allowNull: true,
        required: false
    }
});

module.exports = User;