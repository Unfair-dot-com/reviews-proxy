const express = require('express');
const path = require('path');

const port = '5000';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/products/', express.static(path.resolve(__dirname, '../public')));
app.use('/products/:id', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`unFair.com has launched on port ${port}`));
