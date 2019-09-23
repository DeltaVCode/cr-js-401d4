'use strict';

const superagent = require('superagent');
const express = require('express');
const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 8080;
const API = 'http://localhost:3000';

// Set the view engine for templating
app.set('view engine', 'ejs');

// Routes
app.get('/', homePage);
app.get('/categories', categories);

function homePage(request, response) {
  superagent.get( `${API}/posts`)
    .then(data => {
      console.log(data.body);
      response.render('site', {page: './pages/posts', title:'Articles', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

function categories(request, response) {
  superagent.get( `${API}/categories`)
    .then(data => {
      console.log(data.body);
      response.render('site', {page: './pages/categories', title:'Categories', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
