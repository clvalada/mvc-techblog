// Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('Post', {
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

// Export both the Post model and the init function
module.exports = {
  Post,
  init: () => {
    // This is where I can add any additional initialization logic
    // if needed in the future
    return Post.init({
      /* any additional options */
    });
  },
};
