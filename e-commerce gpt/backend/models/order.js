const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  totalPrice: DataTypes.FLOAT
});

module.exports = Order;