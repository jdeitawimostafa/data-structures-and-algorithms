'use strict';

const PseudoQueue = require('./queue-with-stacks.js');
const {expect} = require('@jest/globals');

describe('queue-with-stacks',() => {
  it('should add the value to the top of the stack',() => {
    let stack = new PseudoQueue();

    stack.enqueue(10);
    expect(stack.stack1.top.value).toBe(10);
  });

  it('should add a multiple values to the stack',() => {
    let stack = new PseudoQueue();

    stack.enqueue(11);
    stack.enqueue(12);
    expect(stack.stack1.top.value).toBe(12);
  });

  it('should dequeue the value from the stack2',() => {
    let stack = new PseudoQueue();

    stack.enqueue(13);
    stack.enqueue(14);
    let result = stack.dequeue();
    expect(result).toBe(13);
    // console.log('stack2 :',stack.stack2);
  });

  it('should throw an error if something went wrong',() => {
    let stack = new PseudoQueue();
    function error(){
      stack.enqueue();
    }
    expect(error).toThrow();
  });

  it('should throw an error if the stack1 is empty and the user want to dequeue',() => {
    let stack = new PseudoQueue();
    function error(){
      stack.dequeue();
    }
    expect(error).toThrow();
  });
});
