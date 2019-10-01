'use strict';

// 3rd Party Resources
const superagent = require('superagent');
const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());

// Should be in the ENV
let port = 3000;
const googleTokenServerUrl = 'https://www.googleapis.com/oauth2/v4/token';
const googlePlusAPI = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
const GOOGLE_CLIENT_ID = '';
const GOOGLE_CLIENT_SECRET = '';
const API_SERVER = 'http://localhost:3000/oauth';

// Routes
app.get('/oauth', authorize);

function authorize (req,res) {
  res.sendStatus(200);
}

app.listen( port, () => console.log(`Server up on ${port}`) );
