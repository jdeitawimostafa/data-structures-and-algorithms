'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class kAryTree{
  constructor(root=null){
    this.root = root;
  }

}


function FizzBuzzTree(kAryTree){
  if(!kAryTree.root){
    throw new Error('the tree is empty !!');
  }

  kAryTree.root.value = test(kAryTree.root.value);

  const check = (node) =>{
    for(let i=0; i<node.children.length;i++){
      node.value = test(node.value);
    }
  };

  function test(value){
    if(value%3 === 0 && value%5 === 0){
      return 'fizzBuzz';
    } else if(value%3 === 0){
      return 'fizz';
    } else if(value%5 === 0){
      return 'buzz';
    } else {
      return `${value}`;
    }
  }
  return kAryTree;
}


module.exports = {Node,kAryTree,FizzBuzzTree};



