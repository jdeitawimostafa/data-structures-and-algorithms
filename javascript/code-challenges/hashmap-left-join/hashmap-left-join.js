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

  get(key) {
    let hash = this.hash(key);
    if (this.table[hash]) {
      let temp = this.table[hash].head;
      while (temp) {
        if (key === Object.keys(temp.value)[0]) return Object.values(temp.value)[0];
        temp = temp.next;
      }
    }
    return null;
  }

  getSpecificKey(key) {
    if (this.table[key]) {
      let temp = this.table[key].head;
      let arr =Object.keys(this.table);
      let i=0;
      let j =1;
      while (i<arr.length) {
        if (key === arr[i]) {
          return Object.values(temp.value)[0];}
        i+=1;
      }
    }

    return null;
  }

  contains(key) {
    let hashedkey = this.hash(key);
    if (this.table[hashedkey]) {
      let temp = this.table[hashedkey].head;
      while (temp) {
        // console.log()
        if (key === Object.keys(temp.value)[0]) return true;
        temp = temp.next;
      }
    }
    return false;
  }
}

function leftJoin(left,right){
  let hash = new hashTable(6);
  for (let key of Object.keys(left.table)){
    let leftTable=left.get1(key);
    let rightTable = right.get1(key);
    hash.add(key, [leftTable,rightTable ]);
  }
  return hash;
}


module.exports = {Node:Node,LinkedList:LinkedList,hashTable:hashTable,leftJoin:leftJoin};
