'use strict';

const {Node,kAryTree,FizzBuzzTree} = require('./fizz-buzz-tree.js');

let tree;

describe('k-array-tree',() => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(4);
    let three = new Node(3);
    let four = new Node(6);
    let five = new Node(9);
    let six = new Node(8);

    one.children.push(three,five,six,two);
    four.children.push(six);

    tree = new kAryTree(one);
  });

  it('should throw an error if the tree is empty',() => {
  });
});


