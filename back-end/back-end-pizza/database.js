const { Sequelize } = require('sequelize').Sequelize;

// MYSQL
// const sequelize = new Sequelize('api_employee', 'root', '123456789', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

const sequelize = new Sequelize('BE_node', 'fabbio', '123456789', {
    dialect: 'postgres',
    host: 'localhost'
});

module.exports = sequelize;