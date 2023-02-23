const DeliveryFee = require('../models/delivery-fee');

exports.getDeliveryFees = (req, res, next) => {
    DeliveryFee.findAll()
        .then(deliveryFees => {
            res.status(200).json({
                message: 'Fetched delivery fees successfully.',
                deliveryFees
            });
        })
        .catch(err => {
            console.log('Error retrieving all delivery fees.');
            console.log(err);
        });
}

exports.getDeliveryFee = (req, res, next) => {
    const deliveryFeeId = req.params.id;
    DeliveryFee.findByPk(deliveryFeeId).then(deliveryFee => {
        res.status(200).json({
            message: 'Fetched delivery fee successfully.',
            deliveryFee
        });
    })
    .catch(err => {
        console.log('Error retrieving delivery fee.');
        console.log(err);
    });
}

exports.registerDeliveryFee = (req, res, next) => {
    const neighbourhood = req.body.neighbourhood;
    const price = req.body.price;

    DeliveryFee.create({
        neighbourhood,
        price
    })
        .then(result => {
            console.log('Delivery fee added!');
            console.log(result);
            res.status(201).json({
                message: 'Delivery fee has been created successfully.',
                employees: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.updateDeliverFee = (req, res, next) => {
    const deliveryFeeId = req.params.id;
    DeliveryFee.findByPk(deliveryFeeId)
        .then(order => {
            if (!order) {
                console.log('Delivery fee not found');
            } else {
                const neighbourhood = req.body.neighbourhood;
                const price = req.body.price;
                return DeliveryFee.update({
                    neighbourhood,
                    price
                });

            }
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted delivery fee.' });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.deleteDeliveryFee = (req, res, next) => {
    const deliveryFeeId = req.params.id;
    DeliveryFee.findByPk(deliveryFeeId)
        .then(order => {
            if (!order) {
                console.log('Delivery fee not found');
            }
            return DeliveryFee.destroy({where: { id: deliveryFeeId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted delivery fee.' });
        })
        .catch(err => {
            console.log(err);
        });
}