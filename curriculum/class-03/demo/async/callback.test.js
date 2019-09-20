const fs = require('fs');

describe('fs.readFile', () => {
  it('calls callback with error for missing file', done => {
    const fileToRead = `${__dirname}/missing.txt`;

    fs.readFile(fileToRead, (err, data) => {
      expect(err).not.toBeNull();
      expect(data).not.toBeDefined();

      done();
    });
  });

  it('calls callback without error, and with data, for real file', done => {
    const fileToRead = `${__dirname}/test.txt`;

    fs.readFile(fileToRead, (err, data) => {
      expect(err).toBeNull();
      expect(data).toBeDefined();
      expect(data.toString().trim().length).toBe(14);

      done();
    });
  })
});
