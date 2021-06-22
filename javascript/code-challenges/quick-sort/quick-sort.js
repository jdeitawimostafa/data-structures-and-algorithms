'use strict';

function swap(array, leftIndex, rightIndex){
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

function partition(array, left, right) {
  let pivot   = array[Math.floor((right + left) / 2)], //middle element
    i= left, //left pointer
    j= right; //right pointer
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, left, right) {
  if(!array && !left && !right){
    throw new Error('you should pass an array and a left and right value');
  }
  if(array.length < 2){
    return array;
  }
  let index;
  if (array.length > 1) {
    index = partition(array, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSort(array, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSort(array, index, right);
    }
  }
  return array;
}

module.exports = {quickSort,partition,swap};
