'use strict';


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
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
      let curr = this.top.value;
      this.top = this.top.next;
      this.length = this.length-1;
      return curr;
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



class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value){
    if(!value){
      throw new Error('no value to added');
    }
    this.stack1.push(value);
  }

  dequeue(){
    if(this.stack1.top.value === null){
      throw new Error('the stack1 is empty');
    }
    if(this.stack2.top === null){
      while(this.stack1.top !== null){
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
