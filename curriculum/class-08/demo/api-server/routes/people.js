'use strict';

const express = require('express');
const People = require('../models/people-model');
const peopleRepository = new People();

const router = express.Router();

router.get('/people', (req, res, next) => {
  peopleRepository
    .get()
    .then(people => {
      res.send(people);
    })
    .catch(next);
});

router.post('/people', (req, res, next) => {
  peopleRepository
    .post(req.body)
    .then(newPerson => {
      res.status(201)
        .send(newPerson);
    })
    // Long way
    .catch(err => {
      next(err);
    })
    // Short way
    .catch(next)
});

module.exports = router;
