const fs = require('fs');

describe('promiseToReadFile', () => {
  it('calls callback without error, and with data, for real file', () => {
    const fileToRead = `${__dirname}/test.txt`;

    return promiseToReadFile(fileToRead)
      .then(data => {
        expect(data).toBeDefined();
        expect(data.toString().trim().length).toBe(14);
      });
  });

  it('calls callback without error, and with data, for real file (async/await)',
    async () => {
    const fileToRead = `${__dirname}/test.txt`;

    let data = await promiseToReadFile(fileToRead);

    expect(data).toBeDefined();
    expect(data.toString().trim().length).toBe(14);
  });
});


function promiseToReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}