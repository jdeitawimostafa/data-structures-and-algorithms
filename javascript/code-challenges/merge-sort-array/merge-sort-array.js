'use strict';

const _mergeArrays = (array, array2) => {
  const c = [];

  while (array.length && array2.length) {
    c.push(array[0] > array2[0] ? array2.shift() : array.shift());
  }

  while (array.length) {
    c.push(array.shift());
  }
  while (array2.length) {
    c.push(array2.shift());
  }

  return c;
};

const mergeSort = (array) => {
  if(!array){
    throw new Error('you should enter an array to merge-sort it ');
  }
  if (array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const a_l = array.slice(0, middle);
  const a_r = array.slice(middle, array.length);
  const sorted_l = mergeSort(a_l);
  const sorted_r = mergeSort(a_r);
  return _mergeArrays(sorted_l, sorted_r);
};

module.exports = mergeSort,_mergeArrays;

