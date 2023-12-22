const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projet_cloud', 'postgres', 'allo1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;