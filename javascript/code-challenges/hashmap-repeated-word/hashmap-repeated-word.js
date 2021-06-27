'use strict';

function repeatedWord (string) {
  if(typeof(string) !== 'string'){
    throw new Error('you should not enter either than a string ');
  }

  let strLowered = string.toLowerCase().replace(/,/g,'');
  const splittedArray=strLowered.split(' ');
  return splittedArray.find( (word,idx) =>
    splittedArray.slice(0,idx).includes(word)
  );

}

module.exports =repeatedWord;
