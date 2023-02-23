const { Sequelize } = require("sequelize");

const sequelize = require('../database');

const DeliveryFee = sequelize.define('delivery-fees', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    neighbourhood: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
        allowNull: false,
    },
});

module.exports = DeliveryFee;