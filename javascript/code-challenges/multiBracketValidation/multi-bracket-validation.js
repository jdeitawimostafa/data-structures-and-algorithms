'use strict';

function multiBracketValidation(str) {
  let stack = [];

  let open = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  let closed = {
    '}': true,
    ']': true,
    ')': true
  };

  if(typeof(str) !== 'string' || str === ''){
    throw new Error('you should enter a string !!');
  }

  for (let i = 0; i < str.length; i++) {

    let char = str[i];

    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

module.exports = multiBracketValidation;
