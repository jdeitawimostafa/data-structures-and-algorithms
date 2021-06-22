const {quickSort,partition,swap} = require('./quick-sort.js');
const {expect} = require('@jest/globals');

describe('Quick-sort-arrays',() => {
  it('should successfully sorted the array of numbers by quick-sort',() => {
    let array = [8,4,23,42,16,15];

    let quickSortArray = quickSort(array,0,array.length -1);

    let expectedResult = [4,8,15,16,23,42];
    console.log(quickSortArray);
    expect(quickSortArray).toEqual(expectedResult);
  });

  it('should successfully sorted the array of letters by quick-sort',() => {
    let lettersArray = ['a','t','n','r','l'];

    let quickSortArray = quickSort(lettersArray,0,lettersArray.length -1);

    let expectedResult = ['a','l','n','r','t'];

    expect(quickSortArray).toStrictEqual(expectedResult);
  });

  it('should return the same array if the length of the array entered is less than 2 ',() => {
    let array = [1];

    let quickSortArray = quickSort(array,0,array.length -1);

    let expectedResult = [1];

    expect(quickSortArray).toStrictEqual(expectedResult);
  });

  it('should throw an error if the user does not add and array and values to determine the pivot',() => {
    function error(){
      quickSort();
    }

    expect(error).toThrow();
  });
});
