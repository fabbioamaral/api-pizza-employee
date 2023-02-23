const Client = require('../models/client');

exports.getClients = (req, res, next) => {
    Client.findAll()
        .then(clients => {
            res.status(200).json({
                message: 'Fetched clients successfully.',
                clients
            });
        })
        .catch(err => {
            console.log('Error retrieving all clients.');
            console.log(err);
        });
}

exports.getClientByPhone = (req, res, next) => {
    const phone = req.params.phone;
    Client.findAll({
        where: {
            phone
        }
    }).then(client => {
        res.status(200).json({
            message: 'Fetched client successfully.',
            client
        });
    })
    .catch(err => {
        console.log('Error retrieving client.');
        console.log(err);
    });
}

exports.updateClient = (req, res, next) => {
    const clientId = req.params.id;
    Client.findByPk(clientId)
        .then(client => {
            if (!client) {
                console.log('client not found');
            } else {
                const name = req.body.name;
                const phone = req.body.phone;
                const notes = req.body.notes;
                const updatedAddress = req.body.address;
                
                return Client.update(
                    { 
                        name,
                        phone,
                        notes,
                        address: updatedAddress                
                    },
                    { where: { id: clientId } }
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

exports.addClient = (req, res, next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const notes = req.body.notes;
    const address = req.body.address;

    Client.create({
        name,
        phone,
        notes,
        address
    })
        .then(result => {
            console.log('Client added!');
            console.log(result);
            res.status(201).json({
                message: 'Client has been added successfully.',
                employees: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.deleteClient = (req, res, next) => {
    const clientId = req.params.id;
    Client.findByPk(clientId)
        .then(client => {
            if (!client) {
                console.log('client not found');
            }

            return Client.destroy({where: { id: clientId }});
        })
        .then(result => {
            res.status(200).json({ message: 'Deleted client.' });
        })
        .catch(err => {
            console.log(err);
        });
}