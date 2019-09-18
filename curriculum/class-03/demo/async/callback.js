'use strict';

const fs = require('fs');

const fileToRead = `${__dirname}/test.txt`;
console.log(fileToRead);

/*
// Synchronous is cheating!!!
const data = fs.readFileSync(fileToRead);
console.log(data.toString());
*/

const dataRead = [];
fs.readFile(fileToRead, (err, data) => {
  // Do stuff with data!
  if (err) {
    console.error(err);
    // data will not be set if there is an error
    console.log({ data })
    return;
  }

  dataRead.push(data.toString());

  console.log('async readFile succeeded!')
  console.log(data.toString());

  doSomethingWithDataRead();
});

console.log('just called readFile');
console.log(dataRead);

function doSomethingWithDataRead() {
  console.log(dataRead.length);
}