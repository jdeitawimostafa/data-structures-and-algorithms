'use strict';

function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      return middle;
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}





describe('array-binary.js',() => {
  it('should return the index of the input that matched the value inside the array by binary-search method',() => {
    // let numList = [4, 8, 15, 16, 23, 42];
    expect(binarySearch([4, 8, 15, 16, 23, 42],16)).toStrictEqual(3);
    expect(binarySearch([4, 8, 15, 16, 23, 42],55)).toStrictEqual(-1);
  });
});
