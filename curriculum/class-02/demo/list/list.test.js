const List = require('./list');

describe('List', () => {
  it('starts empty', () => {
    let list = new List();
    expect(list.length)
      .toBe(0);
  });

  it('can add new item', () => {
    let list = new List();

    list.push(5);

    expect(list.length).toBe(1);
    expect(list[0]).toBe(5);

    let result = list.push(3);

    expect(list.length).toBe(2);
    expect(list[1]).toBe(3);
    expect(result).toBe(list);
  });

  it('can map to new List', () => {
    // 1. Arrange
    let list = new List();
    list.push(1);
    list.push(3);
    list.push(5);
    expect(list.length).toBe(3);

    // 2. Act on the List
    let result = list.map(n => n * 2);

    // 3. Assert (Expect) result
    expect(result).toBeInstanceOf(List);
    expect(result).not.toBe(list);
    expect(result.length).toBe(list.length);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(6);
    expect(result[2]).toBe(10);
  });
});
