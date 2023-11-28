// logout.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for handling user logout
router.get('/logout', userController.logout);

module.exports = router;
