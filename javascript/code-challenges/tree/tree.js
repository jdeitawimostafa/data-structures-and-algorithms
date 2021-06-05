'use strict';

class Node{
  constructor(value, left = null, right=null){
    this.value=value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree{
  constructor(root = null){
    this.root = root;
  }

  preOrder(){
    let resultArray= [];

    let traverse = (node) => {
      resultArray.push(node.value);
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return resultArray;
  }

  inOrder(){
    let resultArray = [];
    let traverse = (node) => {
      if(node.left){
        traverse(node.left);
      }
      resultArray.push(node.value);

      if(node.right){
        traverse(node.right);
      }

    };
    traverse(this.root);
    return resultArray;
  }

  postOrder(){
    let resultArray = [];

    let travrese = (node) => {
      if(node.left){
        travrese(node.left);
      }
      if(node.right){
        travrese(node.right);
      }
      resultArray.push(node.value);
    };
    travrese(this.root);
    return resultArray;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  add(value){
    let node = new Node(value);
    if(!value){
      throw new Error('you have to enter a value!!');
    }
    if(this.root === null){
      this.root = node;
      return this;
    }

    while(this.root){
      if(this.root.value === value){
        return undefined;
      }

      if(this.root.value > value){
        if(this.root.left === null){
          this.root.left = node;
          return this;
        }
        this.root = this.root.left;
      } else {
        if(this.root.right === null){
          this.root.right = node;
          return this;
        }
        this.root = this.root.right;
      }
    }
  }

  contains(value){
    if(!value){
      throw new Error('you have to enter a value');
    }
    if(!this.root){
      return false;
    }
    if(this.root === value){
      return true;
    }
    let curr = this.root;
    let test = false;
    while(curr && !test){
      if(curr < value){
        curr = curr.right;
      } else {
        if(curr > value){
          curr = curr.left;
        } else {
          test = curr;
        }
      }
    }
    if(!test) {
      return undefined;
    }
    return test;
  }
}

module.exports = {Node:Node,BinaryTree:BinaryTree,BinarySearchTree:BinarySearchTree};
