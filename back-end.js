const express = require('express');
const app = express();
const port = 3000;

// Parse incoming request bodies (form data) in JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route for form submission
app.post('/submit', (req, res) => {
  // Handle the form submission here
  // Access form data from req.body
  const { name, email, message } = req.body;
  // Perform any necessary server-side processing or database operations
  
  // Send a response back to the client
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});