console.log('Loading hello module');

console.log(module.exports === exports);

function sayHello(name = 'world!') {
  return `Hello, ${name}`;
}

function goodbye() {
  return 'goodbye!';
}

// console.log(module);
// console.log('before', exports);

exports.sup = sayHello;
exports.bye = goodbye;

// console.log('after', exports);

/*
module.exports = 'hello!'
// exports variable is still the old value!
exports.whatever = 'something';
*/

/*

const express = require('express');
// express is a function!
const app = express();

*/
