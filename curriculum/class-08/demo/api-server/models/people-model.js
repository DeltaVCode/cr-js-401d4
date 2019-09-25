'use strict';

class People {

  constructor() {
    this.data = {};
    /*
      {
        1: {name:'john'},
        2: {name:'lena'},
        3: {name:'caity'}
      }
     */
  }

  get(id) {
    return Promise.resolve(
      id
        ? this.data[id]
        : Object.keys(this.data).reduce( (arr,element) => {arr.push(this.data[element]); return arr;}, [])
    );

    /*
    [
      {name:'john'}, {name:'lena'}, {name:'caity'}
    ]
    */
  }

  post(record) {
    if (!record.name)
    {
      // throw
      return Promise.reject('name is required');
    }

    let id = Object.keys(this.data).length + 1;
    this.data[id] = {
      ...record,
      id
    };
    return Promise.resolve(this.data[id]);
  }

}

module.exports = People;
