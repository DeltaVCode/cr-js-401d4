'use strict';

const auth = require('../../../src/auth/middleware.js');
require('../../supergoose.js');
const User = require('../../../src/auth/users-model');

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

let unauthorizedError = { status: 401 };

beforeAll(async () => {
  await new User(users.admin).save();
});

describe('Auth Middleware', () => {
  it('sets req.user.username from Basic header if user exists', async () => {
    // Arrange
    let req = {
      headers: {
        'authorization': 'Basic  YWRtaW46cGFzc3dvcmQ=',
      },
    };
    let res = {};
    let next = jest.fn();

    // Act
    await auth(req, res, next);

    // Assert
    expect(req).toHaveProperty('user');
    expect(req.user).toHaveProperty('username', 'admin');
    expect(next).toHaveBeenCalledWith();
  });

  it('leaves req.user is null for missing user', async () => {
    // Arrange
    let req = {
      headers: {
        // user-admin1
        'authorization': 'Basic  dXNlci1hZG1pbjE6cGFzc3dvcmQx',
      },
    };
    let res = {};
    let next = jest.fn();

    // Act
    await auth(req, res, next);

    // Assert
    expect(req).toHaveProperty('user', null);
    expect(next).toHaveBeenCalledWith(unauthorizedError);
  });

  it('leaves req.user is null for unknown Authorization type', async () => {
    // Arrange
    let req = {
      headers: {
        'authorization': 'Turtles  dXNlci1hZG1pbjE6cGFzc3dvcmQx',
      },
    };
    let res = {};
    let next = jest.fn();

    // Act
    await auth(req, res, next);

    // Assert
    expect(req).toHaveProperty('user', null);
    expect(next).toHaveBeenCalledWith(unauthorizedError);
  });

  it('leaves req.user is null for invalid Basic authorization', async () => {
    // Arrange
    let req = {
      headers: {
        'authorization': 'Basic  iase0875123%$&^$&^%2iuhg0982+S_D+_AASF+_ASF',
      },
    };
    let res = {};
    let next = jest.fn();

    // Act
    await auth(req, res, next);

    // Assert
    expect(req).toHaveProperty('user', null);
    expect(next).toHaveBeenCalledWith(unauthorizedError);
  });
});
