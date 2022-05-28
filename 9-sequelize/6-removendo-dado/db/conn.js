const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('battisti_node_2', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;