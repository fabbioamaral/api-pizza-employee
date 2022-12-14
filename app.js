const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const sequelize = require('./database');
const employeesRoutes = require('./routes/employees');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/employees', employeesRoutes);

sequelize.sync().then(result => {
    console.log('Sequelize started OK!');

    // since the database has started properly, we are able to start the server
    app.listen(8080);
}).catch(err => {
    console.log('Sequelize Error!');
    console.log(err);
});
