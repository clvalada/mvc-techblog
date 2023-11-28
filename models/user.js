// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const User = sequelize.define('User', {
  // model attributes 
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Add future associations or additional configurations here

module.exports = User;
