'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const colorLogger = require('./middleware/color-logger');
const errorHandler = require('./middleware/error-handler');

const app = express();

// Log each request
app.use(logger);

app.use((req, res, next) => {
  if (Math.random() > 0.5) {
    return next();
  }

  throw 'You\'re unlucky!'
});

// middleware - way to modify request/response
app.use(express.json());


app.get('/', (req, res) => res.send(`Hello, world at ${req.requestTime}`));

app.get('/500', () => {
  throw new Error('500 test');
});

app.use(colorLogger('blue'));

let db = [];
app.get('/categories', (req, res) => {
  res.send(db);
});

app.post('/categories', colorLogger('red', 'MUTATION'), (req, res) => {
  let newRecord = {
    ...req.body,
    id: Math.random(),
  }
  db.push(newRecord);
  res.status(201).send(newRecord);
});

// Error handling needs to happen last
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  }
};
