'use strict';

const {expect} = require('@jest/globals');

const validation = require('./multi-bracket-validation.js');

describe('bracket-validation',() => {

  it('should return true if the brackets balanced',() => {

    let result = validation('{}');
    expect(result).toBe(true);
  });

  it('should return false if the brackets does not match each other',() => {
    let result = validation('{)');
    expect(result).toBe(false);
  });

  it('should throw an error if the input is not a string',() => {
    function error(){
      validation(1);
    }
    expect(error).toThrow();
  });

  it('should throw an error if the input is empty',() => {
    function error(){
      validation();
    }
    expect(error).toThrow();
  });

});
