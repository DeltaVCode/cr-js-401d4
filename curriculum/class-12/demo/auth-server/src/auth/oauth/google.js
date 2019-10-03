'use strict';

const superagent = require('superagent');
const Users = require('../users-model');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

module.exports = async (req) => {
  let { code } = req.query;
  console.log('(1) CODE', code);

  let response = await superagent
    .post('https://www.googleapis.com/oauth2/v4/token')
    .type('form')
    .send({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth`,
      grant_type: 'authorization_code',
    });
  
  let access_token = response.body.access_token;
  console.log('(2) ACCESS TOKEN', access_token);

  let openIdResponse = await superagent
    .get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
    .set('Authorization', `Bearer ${access_token}`);
  console.log('(3) API PROFILE', openIdResponse.body);

  let { email } = openIdResponse.body;
  let user = await Users.createFromOauth(email);
  console.log('(4) USER', user);

  return user.generateToken();
};
