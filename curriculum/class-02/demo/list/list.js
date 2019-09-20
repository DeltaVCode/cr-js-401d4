class List {
  constructor(){
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
    return this;
  }

  map(mapper) {
    let result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(mapper(this[i]));
    }
    return result;
  }
}

module.exports = List;
