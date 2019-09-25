'use strict';

const {server} = require('../../lib/server.js');
const supergoose = require('../supergoose.js');
const mockRequest = supergoose(server);

describe('People API', () => {
  it('can get() all people', () => {
    return mockRequest
      .get('/people')
      .expect(200)
      .expect([]);
  });

  it('can post() a new people', () => {
    let newPerson = { name: 'Tyler Durden' };
    return mockRequest
      .post('/people')
      .send(newPerson)
      .expect(201)
      .then(response => {
        expect(response.body)
          .toMatchObject(newPerson);
        expect(response.body)
          .toHaveProperty('id');

        return mockRequest
          .get('/people')
          .expect(200)
          .expect([response.body])
      });
  });

  it('returns 500 for post() without name', () => {
    let newPerson = { title: 'Teacher' };
    return mockRequest
      .post('/people')
      .send(newPerson)
      .expect(500);
  });
});
