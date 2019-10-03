'use strict';

const jwt = require('jsonwebtoken');

const server = require('../../../src/app.js').server;
const supergoose = require('../../supergoose.js');
let User = require('../../../src/auth/users-model');

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
          var token = jwt.decode(results.text);
          id = token.id;
          encodedToken = results.text;
          expect(token.id).toBeDefined();
          expect(token.capabilities).toBeDefined();
        });
    });

    let savedToken;
    it('can signin with basic', () => {
      return mockRequest.get('/signin')
        .auth(users[userType].username, users[userType].password)
        .expect(200)
        .then(results => {
          var token = jwt.decode(results.text);
          expect(token.id).toEqual(id);
          expect(token.capabilities).toBeDefined();

          savedToken = results.text;
        });
    });

    it('can sign in with bearer token', async () => {
      expect(savedToken).toBeDefined();
      expect(savedToken).not.toBe('');

      let response = await mockRequest
        .get('/signin')
        .set('Authorization', `Bearer ${savedToken}`)
        .expect(200);

      var token = jwt.decode(response.text);
      expect(token.id).toEqual(id);
      expect(token.capabilities).toBeDefined();
    })

    it('cannot sign in with bearer token after password is changed', async () => {
      // Arrange
      expect(savedToken).toBeDefined();
      expect(savedToken).not.toBe('');
      let savedUser = await User.findOne({ username: users[userType].username });
      await User.findByIdAndUpdate(savedUser._id, { password: 'Turtles!' });

      // Act + Assert
      await mockRequest
        .get('/signin')
        .set('Authorization', `Bearer ${savedToken}`)
        .expect(401);
    })
  });
});