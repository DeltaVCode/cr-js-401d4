const db = require('../db');
const eventHub = require('../hub');

describe('db', () => {
  beforeEach(() => {
    // console.log('before spy', eventHub.emit);
    jest.spyOn(eventHub, 'emit');
    // console.log('after spy', eventHub.emit);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('saves with sequential id', () => {
    // Arrange
    let doc = { test: true };

    let saveEmitted = false;
    let savePayload = null;
    eventHub.on('save', payload => {
      saveEmitted = true;
      savePayload = payload;
    });

    // Act
    let res = db.saveToDb(doc);

    // Assert
    expect(res).not.toBe(doc);
    expect(res).toHaveProperty('id', 1);

    expect(eventHub.emit).toHaveBeenCalledWith('save', res);

    expect(saveEmitted).toBe(true);
    expect(savePayload).toBe(res);
  });

});
