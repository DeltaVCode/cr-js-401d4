let obj = {
  name: 'Keith',
};

obj.printMyName = function() {
  console.log(this.name);
}

obj.printSomeNumbers = function() {
  // this will have name = Keith

  [1,2,3].forEach(n => {
    // this *still* has name = Keith
    // even though we're in an arrow function
    console.log(this.name, n);
  });

  [4,5,6].forEach(function (n) {
    // this.name is undefined
    // because forEach binds to a new this
    console.log(this.name, n);
    // console.log(this) // global object
  });

}

obj.printMyName(); // this inside printMyName = obj
obj.printSomeNumbers();
