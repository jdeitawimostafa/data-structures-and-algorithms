'use strict';

const { expect } = require('@jest/globals');
const { Stack } = require('./stacks-and-queues.js');
const { Queue } = require('./stacks-and-queues.js');



describe('stack-queue',() => {
  it('should successfully push onto a stack',() => {
    let sll = new Stack();
    sll.push(9);
    sll.push(10);
    expect(sll.top.value).toBe(10);
  });

  it('should successfully push multiple values onto a stack',() => {
    let sll = new Stack();
    sll.push(10);
    sll.push(11);
    sll.push(12);

    expect(sll.top.value).toBe(12);
  });

  it('should successfully pop off the stack',() => {
    let sll = new Stack();
    sll.push(10);
    sll.push(11);
    sll.pop();

    expect(sll.top.value).toBe(10);
  });

  it('should successfully empty a stack after multiple pops',() => {
    let sll = new Stack();
    sll.push(10);
    sll.push(11);
    sll.pop();
    sll.pop();
    expect(sll.length).toEqual(0);
  });

  it('should successfully peek the next item on the stack',() => {
    let sll = new Stack();
    sll.push(10);
    sll.push(11);
    sll.peek();
    expect(sll.top.value).toEqual(11);
    expect(sll.top.next.value).toEqual(10);
  });

  it('sould successfully instantiate an empty stack',() => {
    let sll = new Stack();
    sll.push(10);
    expect(sll.top.value).toBe(10);
  });

  it('should Call pop or peek on empty stack raises exception',() =>{
    let sll = new Stack();
    function Error(){
      sll.peek();
    }
    expect(Error).toThrow();
  });

  it('should successfully enqueue into a queue',() => {
    let qll = new Queue();
    qll.enqueue(10);
    expect(qll.front.value).toBe(10);
  });

  it('should successfully enqueue a multiple into a queue',() => {
    let qll = new Queue();
    qll.enqueue(10);
    qll.enqueue(11);
    expect(qll.front.value).toBe(10);
  });

  it('should successfully dequeue out of a queue the expected value',() => {
    let qll = new Queue();
    qll.enqueue(10);
    qll.enqueue(11);
    qll.dequeue();

    expect(qll.front.value).toBe(10);
  });

  it('should successfully peek into a queue, seeing the expected value',() => {
    let qll = new Queue();
    qll.enqueue(10);
    qll.enqueue(11);
    qll.peek();
    expect(qll.front.value).toEqual(10);
    expect(qll.front.next.value).toEqual(11);
  });

  it('should successfully empty a queue after multiple dequeues',() => {
    let qll = new Queue();
    qll.enqueue(10);
    qll.enqueue(11);
    qll.dequeue();
    qll.dequeue();

    expect(qll.length).toEqual(0);
  });

  it('should successfully instantiate an empty queue',() => {
    let qll = new Queue();
    qll.enqueue(10);
    expect(qll.front.value).toBe(10);
  });

  it('should dequeue or peek on empty queue raises exception',() => {
    let qll = new Queue();
    function Erorr(){
      qll.peek();
    }
    expect(Erorr).toThrow();
  });
});

