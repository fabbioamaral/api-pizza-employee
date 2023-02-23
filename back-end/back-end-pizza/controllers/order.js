const Order = require('../models/order');

exports.getOrders = (req, res, next) => {
    Order.findAll()
        .then(orders => {
            res.status(200).json({
                message: 'Fetched orders successfully.',
                orders
            });
        })
        .catch(err => {
            console.log('Error retrieving all orders.');
            console.log(err);
        });
}

exports.getOrdersByClient = (req, res, next) => {
    const clientId = req.params.id;
    Order.findAll({
        where: {
            clientId
        }
    }).then(orders => {
        res.status(200).json({
            message: 'Fetched orders successfully.',
            orders
        });
    })
    .catch(err => {
        console.log('Error retrieving all orders.');
        console.log(err);
    });
}

exports.registerOrder = (req, res, next) => {
    const priceItems = req.body.priceItems;
    const discount = req.body.discount;
    const priceTotal = req.body.priceTotal;
    const paymentMethod = req.body.paymentMethod;

    Order.create({
        priceItems,
        discount,
        priceTotal,
        paymentMethod
    })
        .then(result => {
            console.log('Order added!');
            console.log(result);
            res.status(201).json({
                message: 'Order has been placed successfully.',
                employees: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.deleteOrder = (req, res, next) => {
    const orderId = req.params.employeeId;
    Order.findByPk(orderId)
        .then(order => {
            if (!order) {
                console.log('order not found');
            }

            return Order.destroy({where: { id: orderId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted order.' });
        })
        .catch(err => {
            console.log(err);
        });
}