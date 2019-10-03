'use strict';


const { server } = require('../../index.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond properly on request to /categories', () => {

    return mockRequest
      .get('/categories')
      .expect(200)
      .then(results => {
        expect(results.body.count).toBe(0);
      });

  });

  it('should respond properly on post to /categories', () => {

    return mockRequest
      .post('/categories')
      .send({name:'Test', description:'test stuff'})
      .expect(200)
      .then(results => {
        expect(results.body.name).toBe('Test');
      });

  });

});
