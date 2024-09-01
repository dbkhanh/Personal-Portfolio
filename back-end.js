const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'html' folder
app.use(express.static(path.join(__dirname, 'html')));

// Route handler for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'home.html'));
});

const port = 3000;
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});

