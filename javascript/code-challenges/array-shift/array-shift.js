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
