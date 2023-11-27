const express = require('express');
const app = express();
const postRoutes = require('./routes/postroutes');

// Use the postRoutes in your app
app.use('/api', postRoutes);

// Other setup code...

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
