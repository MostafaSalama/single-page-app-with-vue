const express = require('express');
const users = require('./data/users');
const app = express();
const APP_PORT = 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(APP_PORT, () => {
  console.log(`app is running at port ${APP_PORT}`);
});