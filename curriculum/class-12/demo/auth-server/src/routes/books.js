'use strict';

const express = require('express');
const router = express.Router();

const auth = require('../auth/middleware');

// Option 1:
router.use(auth);

// Option 2: add auth between path and route handlers:
router.get('/books', handleGetAll);
router.get('/books/:id', handleGetOne);

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
