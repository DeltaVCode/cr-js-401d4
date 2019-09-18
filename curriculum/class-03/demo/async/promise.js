'use strict';

const fs = require('fs');
const promisify = require('./util/promisify');

const promiseToReadFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const fileToRead = `${__dirname}/test.txt`;
console.log(fileToRead);

const dataRead = [];
promiseToReadFile(fileToRead)
  .then(data => {
    dataRead.push(data.toString());

    console.log('async readFile succeeded!')
    console.log(data.toString());

    doSomethingWithDataRead();

    return 'Promises are fun!'
  })
  .then(message => {
    console.log('message via promise', message);
  })
  .catch(err => {
    console.error(err);
    // data will not be set if there is an error
    console.log({ data })
  })

console.log('just called readFile');
console.log(dataRead);

function doSomethingWithDataRead() {
  console.log(dataRead.length);
}

