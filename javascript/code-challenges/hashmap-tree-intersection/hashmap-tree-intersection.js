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

  findmaximumvalue(binaryTreeArray){
    let checkValue = binaryTreeArray[0];
    for(let i=1; i<binaryTreeArray.length;i++){
      if(binaryTreeArray[i] > checkValue){
        checkValue = binaryTreeArray[i];
      }
    }
    return checkValue;
  }

  breadthFirst(){
    let breadthFirstArray = [];
    let result = [];
    if(this.root === null){
      throw new Error('the tree is empty !');
    } else {
      breadthFirstArray.push(this.root);
    }

    while(breadthFirstArray.length !== 0){
      let curr = breadthFirstArray.shift();
      result.push(curr.value);
      if(curr.left){
        breadthFirstArray.push(curr.left);
      }
      if(curr.right){
        breadthFirstArray.push(curr.right);
      }
    }
    return result;
  }
}


function treeIntersection(binary1,binary2){

  if(!binary1 && !binary2) {
    throw new Error('you should enter two trees');
  }

  let matchingvalues=[];

  let binaryTree1=binary1.preOrder();
  let binaryTree2= binary2.preOrder();

  for (let i = 0; i < binaryTree1.length; i++) {
    if(binaryTree1[i]===binaryTree2[i]){
      matchingvalues.push(binaryTree1[i]);
    }
  }
  return matchingvalues;
}

module.exports={BinaryTree:BinaryTree,Node:Node,treeIntersection:treeIntersection};
