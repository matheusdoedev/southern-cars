const Sequelize = require('sequelize');

const sequelize = require('./index');

const Cars = sequelize.define('CARs', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Cars;
