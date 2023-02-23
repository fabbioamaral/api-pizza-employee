const { Sequelize } = require("sequelize");

const sequelize = require('../database');
const DeliveryFee = require('./delivery-fee');

const Address = sequelize.define('addresses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    aditionalInfo: {
        type: Sequelize.STRING,
    },
    neighbourhood: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Address.hasOne(DeliveryFee);
DeliveryFee.hasMany(Address);

module.exports = Address;