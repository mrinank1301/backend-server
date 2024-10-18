const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const Practical1 = fs.readFileSync('Practical-1.txt', 'utf8');
  res.json({
    Practical1: Practical1,
    Note:'\r\n indicates nxt line so remove that adn go to the nxt line'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
