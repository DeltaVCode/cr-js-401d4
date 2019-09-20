const animalFactory = (name) => {
  // no 'this'

  return {
    name,

    walk: function() {
      console.log(`${this.name} is walking...`);
    }
  }
}

var cow = animalFactory('bruce');
cow.walk();

// fake "inheritance" using factory

const dogFactory = (name, tailLength) => {
  let dog = animalFactory(name);
  dog.tailLength = tailLength;
  return dog;
}
