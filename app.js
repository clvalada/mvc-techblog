// app.js

const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');
const { sequelize } = require('./models'); // Assuming you have a 'models' folder with Sequelize models

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
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

// Set up routes and controllers
app.use('/api', require('./routes/postRoutes')); // Example route, adjust based on your project structure

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
