// Arrow functions

// No parameters
var f1 = () => {};
// 1 parameter
var f2 = x => {};
var f3 = (x) => {};
// 2+ parameters
var f4 = (x, y) => {};


// Body:

// Nothing
var f5 = () => {};
// Expression
var f6 = x => x + 1;
var fo = x => ({ name: 'Keith' });
// Statement
var f7 = x => {
  // whatever
  // you
  // want
  // optional: return result
  return x + 1;
}
