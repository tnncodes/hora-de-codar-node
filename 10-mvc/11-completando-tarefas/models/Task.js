const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Task = db.define('task', {
  title: {
    type: DataTypes.STRING,
    required: true
  },
  description: {
    type: DataTypes.STRING,
    required: true
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true
  }
});

module.exports = Task;