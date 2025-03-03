const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res) => {
  fs.readFile(path.join(__dirname, '../admin-backend/products.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading products data.');
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => console.log(`Frontend server listening on port ${port}`));
