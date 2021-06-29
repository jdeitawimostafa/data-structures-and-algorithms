'use strict';
const { expect } = require('@jest/globals');
const hashTable =require( './hashmap-left-join.js' );
describe('hashing Hash tables', () => {
  it('should successfully add a key/value to the hashtable', () => {
    let left = new hashTable.hashTable(6);
    let right = new hashTable(6);
    left.addToTable('mostafa',24);
    left.addToTable('ahmad',23);
    left.addToTable('ibrahem',25);
    left.addToTable('danial', 26);
    right.addToTable('sam',6);
    right.addToTable('ahmad',8);
    right.addToTable('mostafa',7);
    right.addToTable('danial', 3);
    expect(hashTable.leftJoin(left,right)).toEqual({"size": 6, "table": [{"head": {"next": null, "value": {"0": [23, 8]}}}, {"head": {"next": null, "value": {"5": [24, 7]}}}, {"head": {"next": null, "value": {"4": [25, null]}}}, {"head": {"next": null, "value": {"3": [26, 3]}}}, undefined, undefined]});
  });
});
