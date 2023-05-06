const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'html' folder
app.use(express.static(path.join(__dirname, 'html')));

// Route handler for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

