// Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('post', {
  // Define your model attributes here
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
