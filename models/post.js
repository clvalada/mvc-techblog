// Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('Post', {
  // Define model attributes here
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});


module.exports = {
  Post,
  init: () => {
    // additional initialization logic
    // if needed in the future
    return Post.init({
      /* any additional options */
    });
  },
};
