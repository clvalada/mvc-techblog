// signup.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for rendering signup form
router.get('/signup', userController.renderSignupForm);

// Route for handling user signup
router.post('/signup', userController.signup);

module.exports = router;
