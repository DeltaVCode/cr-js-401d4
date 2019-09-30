'use strict';

const { server } = require('../../../src/app.js');
const supergoose = require('../../supergoose.js');

const mockRequest = supergoose(server);

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

describe('Auth Router', () => {
  it.skip('', () => {})
});
