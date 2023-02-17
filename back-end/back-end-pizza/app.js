const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const sequelize = require('./database');
const employeesRoutes = require('./routes/employees');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use('/employee', employeesRoutes);
app.use('/product', productRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

sequelize.sync().then(result => {
    console.log('Sequelize started OK!');

    // since the database has started properly, we are able to start the server
    app.listen(8080);
}).catch(err => {
    console.log('Sequelize Error!');
    console.log(err);
});
