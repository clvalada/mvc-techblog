// PostController.js
exports.getHomePage = (req, res) => {
    // Logic to fetch posts or other data
    const posts = /* ... */;
  
    // Render the 'home' view with the posts data
    res.render('home', { posts });
  };
  