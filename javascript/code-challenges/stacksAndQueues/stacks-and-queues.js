'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{ //LIFO
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(value){
    let node = new Node(value);
    if(this.top === null){
      this.top = node;
      this.length = this.length+1;
    //   return this;
    } else {
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
      this.length = this.length+1;
    //   return this;
    }
  }

  pop(){
    if(this.top === null){
      throw new Error('the stack is empty!!');
    }
    else {
      this.top = this.top.next;
      this.length = this.length-1;
      return this;
    }
  }
  peek(){
    if(this.top === null){
      throw new Error('the stack is empty!!');
    }
    return this.top;
  }

  isEmpty(){
    if(this.top === null){
      return true;
    } else{
      return false;
    }
  }
}

class Queue{ //FIFO
  constructor(){
    this.front = null;
    this.length = 0;
  }

  enqueue(value){
    let node = new Node(value);
    if(this.front === null){
      this.front = node;
      this.length+=1;
    } else{
      let temp = this.front;
      while(this.front.next !== null){
        temp = temp.next;
      }
      temp.next = node;
      this.length = this.length+1;
    }
  }

  dequeue(){
    if(this.front === null){
      throw new Error('the Queue is empty !!');
    } else {
      let temp = this.front;
      temp = this.front.next;
      this.length = this.length-1;
    }
  }

  peek(){
    if(this.front === null){
      throw new Error('the Queue is empty !!');
    }
    return this.front;
  }

  isEmpty(){
    if(this.values){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Node:Node,
  Stack:Stack,
  Queue:Queue
};
