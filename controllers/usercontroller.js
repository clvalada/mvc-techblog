// userController.js
const { User } = require('../models'); // Import your User model

// Function to render the signup form
const renderSignupForm = (req, res) => {
  res.render('signup'); 
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

module.exports = {
  renderSignupForm,
  signup,
};
