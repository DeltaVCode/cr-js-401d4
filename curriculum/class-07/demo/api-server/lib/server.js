'use strict';

const express = require('express');
const logger = require('./middleware/logger');

const app = express();

// Log each request
app.use(logger);

// middleware - way to modify request/response
app.use(express.json());

app.get('/', (req, res) => res.send(`Hello, world at ${req.requestTime}`));

let db = [];
app.get('/categories', (req, res) => {
  res.send(db);
});

app.post('/categories', (req, res) => {
  let newRecord = {
    ...req.body,
    id: Math.random(),
  }
  db.push(newRecord);
  res.status(201).send(newRecord);
});

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  }
};
