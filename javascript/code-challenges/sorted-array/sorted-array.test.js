'use strict';

const sortArray = require('./sorted-array.js');
const {expect} = require('@jest/globals');

describe('arrays',() => {
  it('should successfully sorting array incrementally',() => {
    let array = [8,4,23,42,16,15];
    let sortedArray = [4,8,15,16,23,42];

    let result = sortArray(array);
    console.log('result array',result);
    expect(result).toStrictEqual(sortedArray);
    expect(result.length).toEqual(6);
  });

  it('should throw an error it the user does not add an array',() => {
    function error(){
      sortArray();
    }
    expect(error).toThrow();
  });

  it('should throw an error if the user add an empty array',() => {
    let array = [];
    function error(){
      sortArray(array);
    }
    expect(error).toThrow();
  });
});
