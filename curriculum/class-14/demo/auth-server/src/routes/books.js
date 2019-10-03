'use strict';

const express = require('express');
const router = express.Router();

const auth = require('../auth/middleware');

router.get('/books', auth('read'), handleGetAll);
router.get('/books/:id', auth('read'), handleGetOne);
router.post('/books', auth('create'), (req, res, next) => next());
router.put('/books', auth('read','update'), (req, res, next) => next());
router.put('/books', auth('read'), auth('update'), (req, res, next) => next());

// Route Handlers
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
