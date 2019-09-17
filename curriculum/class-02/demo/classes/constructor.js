'use strict';

const Animal = function(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log(`${this.name} is walking...`);
}

var cow = new Animal('bruce')
cow.walk();

const Dog = function(name) {
  Animal.call(this, name);
}
Dog.prototype = new Animal();

var dog = new Dog('wayne');
dog.walk();

const Bat = function(name) {
  Animal.call(this, name);
}
Bat.prototype = new Animal();
Bat.prototype.walk = () => { throw Error('Bats can\'t walk, silly!') }
var man = new Bat('man');
man.walk();

// module.exports = Dog;
// const Dog = require('./constructor');

module.exports = {
  Dog,
  Animal,
  Bat,
};
/*
const Constructors = require('./constructor');
const bruce = new Constructors.Dog('bruce');

// or use destructuring!
const { Dog, Animal } = require('./constructor');
const wayne = new Dog('wayne');
*/