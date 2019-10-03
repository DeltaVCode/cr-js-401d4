const logger = require('../../../lib/middleware/logger');

describe('logger middleware', () => {
  it('sets req.requestTime', () => {
    // Arrange
    const req = {};
    const res = {
      headers: [],
      set: function(header, value) {
        this.headers[header] = value;
      },
    };
    let nextWasCalled = false;
    const next = () => { nextWasCalled = true; };

    // Act
    logger(req, res, next);

    // Assert
    expect(req.requestTime).toBeInstanceOf(Date);
    expect(nextWasCalled).toBe(true);
    expect(res.headers['X-Request-Time'])
      .toMatch(/^\d{4}-\d{2}-\d{2}/); // yyyy-MM-dd
  });
});
