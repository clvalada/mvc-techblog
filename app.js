// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');
const sequelize = require('./database');
const Post = require('./models/Post');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
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

// Sync the Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

// Set up routes and controllers
app.use(require('./routes/postroutes'));
app.use('/', require('./routes/homeRoute'));
app.use('/', require('./routes/signup'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/logout'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
