function isPalindrome(list) {
  return false;
}

describe('isPalindrome', () => {
  it('returns false for empty list', () => {
    let list = new LinkedList();
    expect(list.toArray()).toEqual([]);

    let res = isPalindrome(list);

    expect(res).toBe(false);
  });
});

class LinkedList {
  constructor() {
    this.head = null;
  }

  toArray() {
    let res = [];
    let current = this.head;
    while(current) res.push(current.value);
    return res;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}