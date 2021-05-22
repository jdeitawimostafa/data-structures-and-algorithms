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
});


