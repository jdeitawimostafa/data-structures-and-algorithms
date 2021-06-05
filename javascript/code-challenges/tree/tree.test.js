'use strcit';

const trees = require('./tree.js');
const {expect} = require('@jest/globals');
let tree = null;

describe('binary-tree',() => {

  beforeAll(() => {
    let one = new trees.Node(1);// tree root
    let two = new trees.Node(2);
    let three = new trees. Node(3);
    let four = new trees.Node(4);
    let five = new trees.Node(5);
    let six = new trees.Node(6);
    let seven = new trees.Node(7);
    let eight = new trees.Node(8);
    let nine = new trees.Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new trees.BinaryTree(one);
  });

  it('should successfully instantiate an empty tree', () => {
    let newTree = new trees.BinaryTree();

    expect(newTree.root).toBeNull();
  });

  it('should successfully instantiate a tree with a single root node',() => {
    let node = new trees.Node(4);
    let newTree = new trees.BinaryTree(node);

    expect(newTree.root.value).toBe(4);
  });

  it('should successfully return a collection from a preorder traversal',() => {
    let expected = [1,2,6,7,8,9,3,4,5];

    let preOrderResult = tree.preOrder();

    expect(preOrderResult).toEqual(expected);
  });

  it('should  successfully return a collection from an inorder traversal',() => {
    let expected = [6,8,7,9,2,1,4,3,5];

    let inOrderResult = tree.inOrder();
    console.log(inOrderResult);
    expect(inOrderResult).toEqual(expected);

  });

  it('should successfully return a collection from a postorder traversal',() => {
    let expected = [8,9,7,6,2,4,5,3,1];

    let postOrderResult = tree.postOrder();

    expect(postOrderResult).toEqual(expected);
  });
});
