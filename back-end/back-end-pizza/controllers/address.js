const Address = require('../models/address');

exports.getAddressesByClient = (req, res, next) => {
    const clientId = req.params.id;
    Address.findAll({
        where: {
            clientId
        }
    }).then(addresses => {
        res.status(200).json({
            message: 'Fetched addresse successfully.',
            client
        });
    })
    .catch(err => {
        console.log('Error retrieving client.');
        console.log(err);
    });
}

exports.updateAddress = (req, res, next) => {
    const addressId = req.params.id;
    Address.findByPk(addressId)
        .then(address => {
            if (!address) {
                console.log('address not found');
            } else {
                const street = req.body.street;
                const number = req.body.number;
                const aditionalInfo = req.body.aditionalInfo;
                const neighbourhood = req.body.neighbourhood;
                const city = req.body.city;
                
                return Address.update(
                    { 
                        street,
                        number,
                        aditionalInfo,
                        neighbourhood,
                        city          
                    },
                    { where: { id: addressId } }
                );                
            }
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted client.' });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.addAddress = (req, res, next) => {
    const street = req.body.street;
    const number = req.body.number;
    const aditionalInfo = req.body.aditionalInfo;
    const neighbourhood = req.body.neighbourhood;
    const city = req.body.city;

    Address.create({
        street,
        number,
        aditionalInfo,
        neighbourhood,
        city   
    })
        .then(result => {
            console.log('Address added!');
            console.log(result);
            res.status(201).json({
                message: 'Address has been added successfully.',
                employees: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.deleteAddress = (req, res, next) => {
    const addressId = req.params.id;
    Address.findByPk(addressId)
        .then(address => {
            if (!address) {
                console.log('address not found');
            }
            return Address.destroy({where: { id: addressId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted address.' });
        })
        .catch(err => {
            console.log(err);
        });
}