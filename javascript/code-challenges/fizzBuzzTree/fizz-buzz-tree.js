'use strict';

class Node{
  constructor(value){
    this.value = value;
  }
}

class kAryTree{
  constructor(root=null){
    this.root = root;
    this.children = [];
  }

}


function FizzBuzzTree(kTree){
  let newTree = new kAryTree();
  while(kTree.length !== 0){
    if(kTree.value%3 === 0 && kTree.value%5 === 0){
      newTree.children.push('“FizzBuzz”');
    } else if(kTree.value%3 === 0){
      newTree.children.push('“Fizz”');
    } else if(kTree.value%5 === 0){
      newTree.children.push('“Buzz”');
    } else {
      newTree.children.push(kTree.value).toString();
    }
  }
  return newTree;
}

module.exports = {kAryTree:kAryTree,FizzBuzzTree:FizzBuzzTree};



