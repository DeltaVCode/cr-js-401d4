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

  it('can post() a new people', async () => {
    let newPerson = { name: 'Tyler Durden' };
    let { body: savedPerson } =
      await mockRequest
        .post('/people')
        .send(newPerson)
        .expect(201);

    expect(savedPerson)
      .toMatchObject(newPerson);
    expect(savedPerson)
      .toHaveProperty('id');

    await mockRequest
      .get('/people')
      .expect(200)
      .expect([savedPerson]);

    await mockRequest
      .get(`/people/${savedPerson.id}`)
      .expect(200)
      .expect(savedPerson);
  });

  it('returns 404 for get by missing id', () => {
    return mockRequest
      .get('/people/missing')
      .expect(404);
  });

  it('returns 500 for post() without name', () => {
    let newPerson = { title: 'Teacher' };
    return mockRequest
      .post('/people')
      .send(newPerson)
      .expect(500);
  });
});
