// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');
const sequelize = require('./database');

// Import the Post model and init function
const { Post, initPostModel } = require('./models/Post');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Set up session management
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

// Initialize the Post model using the init function
initPostModel();

// Set up routes and controllers
app.use(require('./routes/postroutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
