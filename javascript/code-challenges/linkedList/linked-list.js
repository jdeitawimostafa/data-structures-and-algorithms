'use strict';

const Node = require('./node.js');

class linkedList {
  constructor(){
    this.head = null;

  }

  insert(value){
    if(!value){
      throw new Error('You did not insert any value !!!');
    }

    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }
    else{
      node.next = this.head;
      this.head = node;
    }
  }


  includes(value){

    if(!value){
      throw new Error('You did not insert any value !!!');
    }

    let temp = this.head;
    while(temp.next !== value){
      if(temp === null){
        return false;
      }
      temp = temp.next;
    }
    return true;
  }

  toString(){
    let node =this.head;
    let Array=[];
    while(node){
      Array.push(`{ ${node.value} } -> `);
      node = node.next;
    }
    Array.push(`NULL`);
    return Array.join('');
  }
}

module.exports = linkedList;
