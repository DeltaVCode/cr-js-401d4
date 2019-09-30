'use strict';

const auth = require('../../../src/auth/middleware.js');
require('../../supergoose.js');

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

describe('Auth Middleware', () => {
});
