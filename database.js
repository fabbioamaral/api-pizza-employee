const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize('api_employee', 'root', '123456789', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;