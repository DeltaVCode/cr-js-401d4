require('../logger');
const eventHub = require('../hub');

describe('logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
    jest.spyOn(eventHub, 'emit');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  describe('on save', () => {
    it('log + emit', () => {
      // Arrange
      let payload = { id: 'deadbeef' };

      // Act
      eventHub.emit('save', payload);

      // Assert
      expect(console.log)
        .toHaveBeenCalledWith(`Record deadbeef was saved!`);
      expect(eventHub.emit)
        .toHaveBeenCalledWith('cache-invalidate', payload);
    });
  });

  describe('on update', () => {
    it('log update + payload', () => {
      // Arrange
      let payload = {};

      // Act
      eventHub.emit('update', payload);

      // Assert
      expect(console.log)
        .toHaveBeenCalledWith('update', payload);
    });
  });
});
