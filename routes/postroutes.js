const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for posts
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.get('/', postController.getHomePage);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
