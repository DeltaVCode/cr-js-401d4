'use strict';

const {server} = require('../lib/server.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('People API', () => {
  it('responds with 404 if not found', () => {
    return mockRequest
      .get('/andy-is-great')
      .expect(404);
  });
});
