const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('battisti-node-2', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Conectamos com sucesso!');
} catch (err) {
  console.log('Não foi possivel conectar: ', error);
}

module.exports = sequelize;