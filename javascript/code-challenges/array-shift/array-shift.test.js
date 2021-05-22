'use strict';


function insertShiftArray(arr,input){
  let newArr=[];
  let x=Math.ceil(arr.length/2);

  for (let i=0; i<x; i++){
    newArr.push(arr[i]);
  }
  newArr.push(input);

  for (let j=x; j<arr.length; j++){
    newArr.push(arr[j]);
  }

  return newArr;
}



describe('array-shift',() => {
  it('should add a new item to the middle index of an array',() => {
    let arr1=[2,4,6,-8];
    expect(insertShiftArray(arr1,5)).toStrictEqual([2,4,5,6,-8]);
  });
});
