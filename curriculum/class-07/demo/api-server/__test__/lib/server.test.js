'use strict';

const {server} = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should set X-Request-Time header on every response', () => {
    return mockRequest
      .get('/')
      .expect('X-Request-Time', /^\d{4}-\d{2}-\d{2}/); // yyyy-MM-dd
  });

  it('should return 404 for missing path', () => {
    return mockRequest
      .get('/404')
      .expect(404);
  });

  it('should return 500 for unhandled error', () => {
    return mockRequest
      .get('/500')
      .expect(500)
  });

  it('should return 200 for home page', () => {
    return mockRequest
      .get('/')
      .expect(200)
      .expect(/^Hello, world/); // we added timestamp to body
  });

  it('should return an empty list from /categories', () => {
    return mockRequest
      .get('/categories')
      .expect(200)
      .expect([])
      .expect('Content-Type', 'application/json; charset=utf-8')
      // expects above are shortcut for this:
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
      })
  });

  it('should create category from POST', () => {
    return mockRequest
      .post('/categories')
      .send({ name: 'Electronics' })
      .expect(201)
      .then(response => {
        expect(response.body)
          .toHaveProperty('name', 'Electronics');
        expect(response.body)
          .toHaveProperty('id');

        return mockRequest
          .get('/categories')
          .expect(200)
          .expect([ response.body ])
          .then(getResponse => {
            expect(getResponse.body)
              .toHaveProperty('length', 1);

            expect(getResponse.body[0])
              .toHaveProperty('name', 'Electronics');
            expect(getResponse.body[0])
              .toHaveProperty('id');
          })
      });
  })
});
