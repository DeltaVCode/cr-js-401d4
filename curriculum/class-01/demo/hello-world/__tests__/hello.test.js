'use strict';

const hello = require('../lib/hello');

describe('hello module', () => {
  describe('sup()', () => {
    it('returns greeting without parameters', () => {
      let greeting = hello.sup();
      expect(greeting).toBe('Hello, world!');
    });

    it('returns greeting with name if specified', () => {
      let greeting = hello.sup('Keith');
      expect(greeting).toBe('Hello, Keith');
    });
  });

  describe('bye', () => {
    it('returns "goodbye!" without name', () =>{
      let farewell = hello.bye();
      expect(farewell).toBe('goodbye!');
    });
  })
});
