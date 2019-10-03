'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');
const oauth = require('./oauth/google'); // TODO: change to your other provider!

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

authRouter.get('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req, res, next) => {
  oauth(req)
    .then(token => {
      res.send(token);
    })
    .catch(next);
});

module.exports = authRouter;
