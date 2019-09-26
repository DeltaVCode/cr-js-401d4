'use strict';

const express = require('express');
const People = require('../models/people-model');
const peopleRepository = new People();

const router = express.Router();

// Middleware based on params!
router.param('id', (req, res, next) => {
  if (/^\d+$/.test(req.params.id)) {
    console.log('GOOD ID', req.params.id);
    return next();
  }

  console.log('BAD ID', req.params.id);
  res.sendStatus(404);
});

router.get('/people', (req, res, next) => {
  peopleRepository
    .get()
    .then(people => {
      res.send(people);
    })
    .catch(next);
});

router.get('/people/:id', (req, res, next) => {
  peopleRepository
    .get(req.params.id)
    .then(person => {
      if (!person) {
        res.status(404)
          .send({
            error: 'person not found'
          });
        return;
      }

      res.send(person)
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
