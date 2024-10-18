const express = require('express');
const fs = require('fs');

const path = require('path');

const filePath = path.join(__dirname, 'Practical-1.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
  res.json({
    Practical1: fileContent,
    Note: '\r\n indicates nxt line so remove that adn go to the nxt line'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
