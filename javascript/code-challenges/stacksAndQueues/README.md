# Stacks and Queues 

* A stack is useful when we want to add elements inside a list into sequential order and remove the last element added. A queue is useful when we want the same behavior, but instead of removing the last added element, we want to remove the first element added to the list .

## code Challenge 10 :

1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next node .
2. Create a Stack class that has a top property. It creates an empty Stack when instantiated.
3. Create a Queue class that has a front property. It creates an empty Queue when instantiated.


## API : 
- Stack : 

1. Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

2. Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value, Should raise exception when called on empty stack .

3. Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack,Should raise exception when called on empty stack .

4. Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

- Queue : 

1. Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

2. Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Should raise exception when called on empty queue .

3. Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue,Should raise exception when called on empty queue .

4. Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.


