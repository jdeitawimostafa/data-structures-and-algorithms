'use strict';

const Node = require('./node.js');

class linkedList {
  constructor(){
    this.head = null;
    this.tail = null;
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
    while(temp){
      if(temp.value === value){
        return true;
      }
      temp = temp.next;
    }
    return false;
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

  append(value){
    if(!value){
      throw new Error('You did not insert any value !!!');
    }
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }
    else {
      let temp = this.head;
      while(temp.next !== null){
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  insertBefore(value, newVal){
    if(!value && newVal){
      throw new Error('You did not insert any value !!!');
    }

    let node = new Node(newVal);

    if(this.head.value === value){
      node.next = this.head;
      this.head = node;
    }
    else {
      // let temp = null;
      // for(let i = this.head; i!== value; temp = i, i= i.next){
      //   node.next = temp.next;
      //   temp.next = node;
      let temp = this.head;
      while(temp.next !== null){

        if(temp.next.value === value){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error('Exception');
    }
  }


  insertAfter(value, newVal){
    if(!value&&newVal){
      throw new Error('You did not insert any value !!!');
    }
    let node = new Node(newVal);
    if(this.head === value){
      this.head.next = node;
    } else{
      let temp = this.head;
      while(temp !== null){
        if(temp.value === value){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error('Exception');
    }
  }

  llkthFromEnd(k){
    if(k===null||k<0){
      throw new Error('You did not insert any value or the value is negative !!!');
    }
    let temp = this.head;
    let length = 0;
    while(temp !== null){
      temp = temp.next;
      length++;
    }
    console.log(length);
    if(k>length-1){
      throw new Error('k is greater than length of linkedlist ');
    }
    let distance = length-k-1;
    temp = this.head;
    while(distance !== 0){
      temp = temp.next;
      distance--;
    }
    return temp;
  }
}

module.exports = linkedList;


// if empty, return NOT_FOUND

// index = 0, temp = head

// while (temp.item != v)

//   index++, temp = temp.next

//   if temp == null

//     return NOT_FOUND

// return index

