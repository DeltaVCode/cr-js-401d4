
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking...`);
  }
}

class Dog extends Animal {
  constructor(name, tailLength) {
    super(name);
    this.tailLength = tailLength;
  }

  wag() {
    console.log(`Wagging my ${this.tailLength}-cm tail`);
  }
}

var bruce = new Dog('bruce', 12);
bruce.walk();
bruce.wag();

class Yorky extends Dog {
  constructor(name, tailLength) {
    super(name, tailLength); // Dog constructor
  }
}

module.exports = {
  Animal,
  Dog,
  Yorky,
  // Docksund,
};

/*
Git diff:

// Without trailing comma
-  Yorky
+  Yorky,
+  Docksund

// With trailing comma
+  Docksund,
*/
