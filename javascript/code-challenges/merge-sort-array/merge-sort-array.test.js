const mergeSort = require('./merge-sort-array.js');
const {expect} = require('@jest/globals');

describe('merge-sort-arrays',() => {

  it('should merge-sort an array correctly',() => {
    let numArray = [2,5,3,8,20,10,55,22];
    let mergeSortedArray = [2,3,5,8,10,20,22,55];

    let result = mergeSort(numArray);
    console.log(result);
    expect(result).toStrictEqual(mergeSortedArray);
  });

  it('should successfully merge-sort an array with letters',() => {
    let lettersArray = ['b','k','n','t','e','v'];

    let mergeSortArray = ['b','e','k','n','t','v'];

    let result = mergeSort(lettersArray);
    console.log('letters array',result);
    expect(result).toStrictEqual(mergeSortArray);
  });

  it('should return the same array if the length of the array is less than 2',() => {
    let array = [1];

    let result = mergeSort(array);

    expect(result).toStrictEqual(array);
    expect(result.length).toEqual(1);
  });

  it('should successfully merge-sort an array with duplication letters',() => {
    let lettersArray = ['b','k','n','k','t','e','v','b'];

    let mergeSortArray = ['b','b','e','k','k','n','t','v'];

    let result = mergeSort(lettersArray);
    console.log('letters array',result);
    expect(result).toStrictEqual(mergeSortArray);
  });

  it('should throw an error if the user does not add an array',() => {
    function error(){
      mergeSort();
    }

    expect(error).toThrow();
  });
});
