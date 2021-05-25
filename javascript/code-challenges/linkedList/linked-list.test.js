'use strict';

const Node = require('./node.js');
const LinkedList = require('./linked-list.js');
const {expect} = require('@jest/globals');

describe('linked-list class',() => {
  it('should instantiate an empty linked list',() => {
    let linkedList = new LinkedList;
    let initalValue = 77;

    linkedList.insert(initalValue);

    expect(linkedList.head.next).toBeNull();
    expect(linkedList.head.value).toEqual(initalValue);
  });

  it('should create a new node',() => {
    let LL = new LinkedList;
    let value = 6;

    LL.insert(value);

    expect(LL.head.value).toEqual(value);
    expect(LL.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list ?', () => {

    let newLinkedList = new LinkedList();
    let firstValue = 10;
    let secondValue = 20;

    newLinkedList.insert(firstValue);
    newLinkedList.insert(secondValue);

    expect(newLinkedList.head.value).toEqual(secondValue);
  });

  it('should insert a multiple nodes into the linked list',() => {
    let newLL = new LinkedList;
    let firstValue = 5;
    let secondValue = 12;

    newLL.insert(firstValue);
    newLL.insert(secondValue);

    expect(newLL.head.value).toEqual(secondValue);
    expect(newLL.head.next.value).toEqual(firstValue);
  });

  it ('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    let value = 5;
    linkedList.insert(value);
    expect(linkedList.includes(value)).toEqual(true);
  });

  it ('Will return false when searching for a value in the linked list that does not exist', () => {
    let linkedList = new LinkedList();
    let value = 7;
    let value2=10;
    linkedList.insert(value);
    expect(linkedList.includes(value2)).toEqual(false);
  });

  it('should return all the data in the linked list',() => {
    let newLinkedList = new LinkedList();
    let firstValue = 5;
    let secondValue = 6;
    let thirdValue = 8;

    newLinkedList.insert(firstValue);
    newLinkedList.insert(secondValue);
    newLinkedList.insert(thirdValue);

    expect(newLinkedList.toString()).toEqual('{ 8 } -> { 6 } -> { 5 } -> NULL');
  });

  it('should successfully add a node to the end of the linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    let lastVlaue = 10;
    ll.append(lastVlaue);
    expect(ll.head.next.value).toEqual(lastVlaue);
  });

  it('should successfully add multiple nodes to the end of a linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    let lastValue = 10;
    let lastValue1 = 11;
    ll.append(lastValue);
    ll.append(lastValue1);
    expect(ll.head.next.next.value).toEqual(lastValue1);
  });

  it('should successfully insert a node before a node located i the middle of a linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    ll.insertBefore(3,5);
    expect(ll.head.next.value).toEqual(5);
  });

  it('should successfully insert a node before the first node of a linked list',() => {
    let ll = new LinkedList();
    ll.insert(6);
    ll.insertBefore(6,7);
    expect(ll.head.value).toEqual(7);
  });

  it('should successfully insert after a node in the middle of the linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertAfter(2,4);
    expect(ll.head.next.next.value).toEqual(4);
  });

  it('should successfully insert a node after the last node of the linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insertAfter(1,3);
    expect(ll.head.next.next.value).toEqual(3);
  });

  it('should return not found when k is greater than length of linkedlist',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);

    function notFound(){
      ll.llkthFromEnd(4);
    }

    expect(notFound).toThrow();
  });

  it('should return false if the k equal to length of the linkedlist ',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    function notFound(){
      ll.llkthFromEnd(4);
    }
    expect(notFound).toThrow();
  });

  it('should return error when the k is not a positive integer',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    function notFound(){
      let x = ll.llkthFromEnd(-1);
      console.log('negative',x);
    }
    expect(notFound).toThrow();
  });
  it('should test if the length of the linkedlist is 1',() => {
    let ll = new LinkedList();
    ll.insert(1);
    let value = ll.llkthFromEnd(0);
    expect(value.value).toEqual(1);
  });

  it('should return the value except the end or the begining',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    let value =  ll.llkthFromEnd(2);
    expect(value.value).toEqual(3);
  });
});


