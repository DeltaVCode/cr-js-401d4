
let numbers = [1,3,5];

let squares = numbers.map(n => n*n);
console.log(squares);

/*
map much simpler than...
let result = [];
for(let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * numbers[i]);
}
console.log(result);
*/

// Declarative

/*
// Rules of FP

1. Prefer immutable (not changed) values
2. Pass around functions as values
   - Both as inputs/arguments AND as outputs
   - const cors = require('cors')
     app.use(cors());    // cors() returns a function!


*/

function logger(label) {
  return (value) => {
    console.log('About to log something!')
    console.log(`${label}: ${value}`);
  }
}

var blue = logger('blue');
var lager = logger('BEER');

blue('Keith says hi');
lager('Bud Light')
