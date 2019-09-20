
function promisify(functionToPromisify) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      functionToPromisify(...args, (err, data) => {
        if (err) { reject(err); }
        else { resolve(data); }
      });
    });
  };
}

module.exports = promisify;
