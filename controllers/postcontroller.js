const { Post } = require('../models');

exports.getHomePage = async (req, res) => {
  try {
    // Fetch posts from the database
    const posts = await Post.findAll();

    // Render the 'home' view with the posts data
    res.render('home', { posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
};
