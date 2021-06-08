'use strict';

const tree = require('./fizz-buzz-tree.js');

let node = new tree.kAryTree(10);
node.children[0]=new tree.kAryTree(5);
node.children[1]=new tree.kAryTree(2);
node.children[2]=new tree.kAryTree(3);
node.children[0].children[0]= new tree.kAryTree(7);
node.children[1].children[0]= new tree.kAryTree(2);
node.children[1].children[1]= new tree.kAryTree(4);
node.children[2].children[0]= new tree.kAryTree(30);
node.children[2].children[1]= new tree.kAryTree(6);
node.children[2].children[2]= new tree.kAryTree(1);
node;
