'use strict';

const jwt = require('jsonwebtoken');

const server = require('../../../src/app.js').server;
const supergoose = require('../../supergoose.js');

const mockRequest = supergoose(server);

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

describe('Auth Router', () => {

  describe.each(
    Object.keys(users).map(key => [key])
  )('%s users', (userType) => {
    
    let encodedToken;
    let id;
    
    it('can create one', () => {
      return mockRequest.post('/signup')
        .send(users[userType])
        .expect(200)
        .then(results => {
          var token = jwt.verify(results.text, process.env.SECRET || 'changeit');
          id = token.id;
          encodedToken = results.text;
          expect(token.id).toBeDefined();
          expect(token.capabilities).toBeDefined();
        });
    });

    it('can signin with basic', () => {
      return mockRequest.get('/signin')
        .auth(users[userType].username, users[userType].password)
        .expect(200)
        .then(results => {
          var token = jwt.verify(results.text, process.env.SECRET || 'changeit');
          expect(token.id).toEqual(id);
          expect(token.capabilities).toBeDefined();
        });
    });

  });
});