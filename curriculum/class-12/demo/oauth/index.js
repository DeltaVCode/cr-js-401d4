'use strict';

require('dotenv').config();

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
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const API_SERVER = 'http://localhost:3000/oauth';

// Routes
app.get('/oauth', authorize);

function authorize (req,res,next) {
  let { code } = req.query;
  console.log('(1) CODE:', code);

  return superagent.post(googleTokenServerUrl)
    .type('form')
    .send({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: API_SERVER,
      grant_type: 'authorization_code',
    })
    .then(response => {
      let { access_token } = response.body;
      console.log('(2) ACCESS TOKEN', access_token);
      return access_token;
    })
    .then(token => {
      return superagent.get(googlePlusAPI)
        .set('Authorization', `Bearer ${token}`)
        .then(response => {
          let user = response.body;
          console.log('(3) USER', user);
          return user;
        });
    })
    .then(user => {
      req.user = user;
      res.json(user);
    })
    .catch(next);
}

app.listen( port, () => console.log(`Server up on ${port}`) );
