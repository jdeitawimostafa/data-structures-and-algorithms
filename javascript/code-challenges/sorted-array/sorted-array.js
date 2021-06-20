'use strict';

function sortArray(array){

  if(!array || array.length === 0){
    throw new Error('you should enter an array to sort!!');
  }
  let temp = 0;
  for(let i=0;i<array.length;i++){
    for(let j=i;j<array.length;j++){
      if(array[j]<array[i]){
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

module.exports = sortArray;
