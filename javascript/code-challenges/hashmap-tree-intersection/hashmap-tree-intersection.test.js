const hashmap = require('./hashmap-tree-intersection.js');
const {expect} = require('@jest/globals');

let tree = null;
let tree2 = null;

describe('binary-tree',() => {

  beforeAll(() => {
    let one = new hashmap.Node(1);// tree root
    let two = new hashmap.Node(2);
    let three = new hashmap.Node(3);
    let four = new hashmap.Node(4);
    let five = new hashmap.Node(5);
    let six = new hashmap.Node(6);
    let seven = new hashmap.Node(7);
    let eight = new hashmap.Node(8);
    let nine = new hashmap.Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new hashmap.BinaryTree(one);

    let twenty = new hashmap.Node(11);// tree root
    two = new hashmap.Node(2);
    three = new hashmap.Node(3);
    let twentyOne = new hashmap.Node(12);
    five = new hashmap.Node(5);
    let twentyTwo = new hashmap.Node(13);
    seven = new hashmap.Node(7);
    let twentyThree = new hashmap.Node(14);
    nine = new hashmap.Node(9);

    twenty.left = two;//
    twenty.right = three;//
    two.left = five;//
    twentyOne.right = seven;
    seven.left = twentyTwo;
    seven.right = twentyThree;
    three.left = nine;

    tree2=new hashmap.BinaryTree(twenty);

  });

  it('should successfully return the matching values in the binary trees', () => {

    let matchingValues = hashmap.treeIntersection(tree,tree);
    let expected = [1,2,6,7,8,9,3,4,5];
    expect(matchingValues).toStrictEqual(expected);
  });

  it('should successfully return the matching values in the binary trees',() => {
    let matchingValues = hashmap.treeIntersection(tree,tree2);
    let expected = [2];
    expect(matchingValues).toStrictEqual(expected);
  });

  it('should throw an error if the user does not add two trees',() => {
    function error(){
      hashmap.treeIntersection(tree);
    }
    expect(error).toThrow();
  });
});
