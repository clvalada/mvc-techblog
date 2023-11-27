// config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql', // Change this to your database dialect (mysql, postgres, sqlite, etc.)
  },
  // You might need similar configurations for 'test' and 'production' environments
};
