'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');
const {expect} = require('@jest/globals');

describe('Animal-shelter',() => {
  it('should enqueue an object',() => {
    const shelter = new AnimalShelter();

    const dogObject = {
      name:'loose',
      type:'dog'
    };
    shelter.enqueue(dogObject);
    console.log(shelter.dogsValues);
    expect(shelter.dogsValues[0].type).toBe('dog');
    expect(shelter.dogsValues[0].name).toBe('loose');
  });

  it('should enqueue multiple animal objects',() => {
    const shelter = new AnimalShelter();

    const dogObject = {
      name:'loose',
      type:'dog'
    };

    const catObject = {
      name:'mat',
      type:'cat'
    };

    shelter.enqueue(dogObject);
    shelter.enqueue(catObject);

    expect(shelter.dogsValues[0].name).toBe('loose');
    expect(shelter.dogsValues[0].type).toBe('dog');
    expect(shelter.catsValues[0].type).toBe('cat');
    expect(shelter.catsValues[0].name).toBe('mat');
  });

  it('should enqueue a multiple dogs or cats object',() => {
    const shelter = new AnimalShelter();

    const dogObject = {
      name:'loose',
      type:'dog'
    };

    const dog2Object = {
      name:'dudu',
      type:'dog'
    };

    shelter.enqueue(dogObject);
    shelter.enqueue(dog2Object);

    expect(shelter.dogsValues[0].name).toBe('dudu');
    expect(shelter.dogsValues[0].type).toBe('dog');
  });

  it('should dequeue an animal object and return it',() => {
    const shelter = new AnimalShelter();

    const dogObject = {
      name:'loose',
      type:'dog'
    };

    shelter.enqueue(dogObject);
    let returnedObject = shelter.dequeue('dog');
    console.log(returnedObject);
    expect(returnedObject.type).toBe('dog');
  });

  it('should throw an error if no object added',() => {
    const shelter = new AnimalShelter();
    function error(){
      shelter.enqueue();
    }
    expect(error).toThrow();
  });

  it('should throw an error if no type of animal added',() => {
    const shelter = new AnimalShelter();
    const dogObject = {
      name:'loose',
      type:'dog'
    };

    shelter.enqueue(dogObject);
    function error(){
      shelter.dequeue();
    }
    expect(error).toThrow();
  });
  it('should throw an error if no objects exists and the user wants to dequeue',() => {
    const shelter = new AnimalShelter();
    function error(){
      shelter.dequeue();
    }
    expect(error).toThrow();
  });
});

