// login.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for rendering login form
router.get('/login', userController.renderLoginForm);

// Route for handling user login
router.post('/login', userController.login);

module.exports = router;
