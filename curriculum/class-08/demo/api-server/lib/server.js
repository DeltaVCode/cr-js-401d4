'use strict';

const express = require('express');

const app = express();
const peopleRoutes = require('../routes/people');

app.use(express.json());

// Routing test
app.get('/routes/:id?/:whatever?', (req, res) => {
  res.send({
    params: req.params,
    query: req.query,
  });
})

app.use(peopleRoutes);
// Or, put routes under /api/v1/people, etc
app.use('/api/v1', peopleRoutes);

module.exports = {
  server: app,
  start: () => {
    let PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
