const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'home.html'));
});

const port = 3000;
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});

