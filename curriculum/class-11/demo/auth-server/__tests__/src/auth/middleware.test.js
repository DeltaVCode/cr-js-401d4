'use strict';

const auth = require('../../../src/auth/middleware.js');
require('../../supergoose.js');

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

let unauthorizedError = { status: 401 };

describe('Auth Middleware', () => {
  it('sets req.user.username from Basic header', () => {
    // Arrange
    let req = {
      headers: {
        'authorization': 'Basic  dXNlci1hZG1pbjE6cGFzc3dvcmQx',
      },
    };
    let res = {};
    let next = jest.fn();

    // Act
    auth(req, res, next);

    // Assert
    expect(req).toHaveProperty('user');
    expect(req.user).toHaveProperty('username', 'user-admin1');
    expect(next).toHaveBeenCalledWith();
  });

  it('leaves req.user is null for unknown Authorization type', () => {
    // Arrange
    let req = {
      headers: {
        'authorization': 'Turtles  dXNlci1hZG1pbjE6cGFzc3dvcmQx',
      },
    };
    let res = {};
    let next = jest.fn();

    // Act
    auth(req, res, next);

    // Assert
    expect(req).toHaveProperty('user', null);
    expect(next).toHaveBeenCalledWith(unauthorizedError);
  });

  it('leaves req.user is null for invalid Basic authorization', () => {
    // Arrange
    let req = {
      headers: {
        'authorization': 'Basic  iase0875123%$&^$&^%2iuhg0982+S_D+_AASF+_ASF',
      },
    };
    let res = {};
    let next = jest.fn();

    // Act
    auth(req, res, next);

    // Assert
    expect(req).toHaveProperty('user', null);
    expect(next).toHaveBeenCalledWith(unauthorizedError);
  });
});
