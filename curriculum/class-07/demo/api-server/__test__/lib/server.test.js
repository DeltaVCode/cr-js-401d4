'use strict';

const {server} = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should return 404 for missing path', () => {
    return mockRequest
      .get('/404')
      .expect(404);
  });
});
