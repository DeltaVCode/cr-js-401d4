const express = require('express');
const authRouter = express.Router();

const User = require('./users-model');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then(user => {
      req.user = user;

      res.send('authenticated!');
    })
    .catch(next);
});
