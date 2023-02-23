const { Sequelize } = require("sequelize");

const sequelize = require('../database');

const Address = require('./address');

const Client = sequelize.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    notes: {
        type: Sequelize.STRING,
    },
});

Address.hasOne(Client);
Client.hasMany(Address);

module.exports = Client;