'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class hashTable{
  constructor(size){
    this.size = size;
    this.table = new Array(size);
  }

  hash(key){
    let hash = 0;

    hash = key.split('').reduce((acc,items) => {
      return acc + items.chatCodeAt(0);
    },0) * 599 & this.size;

    return hash;
  }
  addToTable(key,value){
    let hash = this.hash(key);
    if(!this.table[hash]){
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = {[key]:value};
    this.table[hash].add(keyValuePair);
  }

  get(key){
    let array = [];
    let hash = this.hash(key);

    if(this.table[hash]){
      this.table.map((obj) => {
        let curr = obj.head.value;
        if(Object.keys(curr) === key){
          array.push(Object.values(curr));
          return Object.values(curr);
        }
      });
    }
    console.log('101 line',array);
    return array;
  }

  contains(key){
    if(this.table.includes(key)){
      return true;
    }
    return null;
  }
}


module.exports = Node,LinkedList,hashTable;
