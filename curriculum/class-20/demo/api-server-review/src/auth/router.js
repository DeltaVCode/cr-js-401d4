const express = require('express');
const authRouter = express.Router();

const auth = require('./middleware');

const User = require('./users-model');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then(user => {
      req.user = user;
      req.token = user.generateToken();

      res.send(req.token);
    })
    .catch(next);
});

authRouter.get('/signin', auth(), (req, res, next) => {
  res.send(req.token);
});
