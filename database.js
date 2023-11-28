// database.js
const { Sequelize } = require('app.js').sequelize;
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', 
  }
);

const Post = require('./models/post'); 
Post.init(sequelize);

module.exports = sequelize;

