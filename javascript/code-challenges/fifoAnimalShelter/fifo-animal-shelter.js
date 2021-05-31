'use strict';

class AnimalShelter{
  constructor(){
    this.dogsValues = new Array();
    this.catsValues = new Array();
  }

  enqueue(animal){
    if(!animal){
      throw new Error(' you did not add an object!!');
    }
    if(animal.type === 'dog'){
      this.dogsValues.unshift(animal);
    } else{
      this.catsValues.unshift(animal);
    }
  }

  dequeue(pref){
    if(!pref){
      throw new Error(' you did not add the type if animal !!!');
    }
    if(pref !== 'dog' && pref !== 'cat'){
      return null;
    }
    if(pref === 'dog'){
      return this.dogsValues.shift();
    } else{
      return this.catsValues.shift();
    }
  }
}

module.exports = AnimalShelter;


