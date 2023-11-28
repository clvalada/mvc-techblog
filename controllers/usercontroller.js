// userController.js
const { User } = require('../models');

// Function to render the signup form
const renderSignupForm = (req, res) => {
  res.render('signup');
};

// Function to render the login form
const renderLoginForm = (req, res) => {
  res.render('login');
};

// Function to handle user signup
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input (add more validation as needed)
    if (!username || !password) {
      return res.status(400).send('Username and password are required.');
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).send('Username is already taken.');
    }

    // Create a new user
    const newUser = await User.create({ username, password });

    // Logic to handle successful signup
    res.redirect('/login');
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Function to handle user login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input (add more validation as needed)
    if (!username || !password) {
      return res.status(400).send('Username and password are required.');
    }

    // Check if the user exists
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).send('Invalid username or password.');
    }

    // Check if the password is correct (you might want to use bcrypt for secure password handling)
    if (user.password !== password) {
      return res.status(401).send('Invalid username or password.');
    }

    // Logic to handle successful login (you might want to use sessions for authentication)
    res.redirect('/');
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Function to handle user logout
const logout = (req, res) => {
    // Logic to clear user session
    // Redirect to the homepage
    res.redirect('/');
  };

module.exports = {
  renderSignupForm,
  signup,
  renderLoginForm,
  login,
  logout,
};
