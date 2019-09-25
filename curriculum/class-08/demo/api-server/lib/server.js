'use strict';

const express = require('express');

const app = express();
const peopleRoutes = require('../routes/people');

app.use(express.json());

app.use(peopleRoutes);

module.exports = {
  server: app,
  start: () => {
    let PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
