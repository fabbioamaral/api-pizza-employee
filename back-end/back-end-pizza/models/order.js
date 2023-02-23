const { Sequelize } = require("sequelize");

const sequelize = require('../database');
const Product = require('./product').Product;
const Client = require('./client');
const Address = require('./address')

const Order = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    priceItems: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
        allowNull: false,
    },
    discount: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
        allowNull: false,
    },
    priceTotal: {
        type: Sequelize.DECIMAL({ precision: 10, scale: 2 }),
        allowNull: false,
    },
    paymentMethod: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

Order.belongsToMany(Product, {through: 'ProductOrders'});
Product.belongsToMany(Order, {through: 'ProductOrders'});

Order.hasOne(Client);
Client.hasMany(Order);

Order.hasOne(Address);
Address.hasMany(Order);

module.exports = Order;