const repeatedWord = require('./hashmap-repeated-word.js');
const {expect} = require('@jest/globals');

describe('hashmap-repeated',() => {
  it('successfully returned the frist repeated word in a string',() => {
    const str = 'hello i am mostafa , i like mansaf';

    let result = repeatedWord(str);

    expect(result).toBe('i');
  });

  it('successfully returned the frist repeated word in a string',() => {

    const str = 'Once upon a time, there was a brave princess who...';

    let result = repeatedWord(str);

    expect(result).toBe('a');
  });

  it('successfully returned the frist repeated word in a string',() => {
    const str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

    let result = repeatedWord(str);

    expect(result).toBe('it');
  });

  it('successfully returned the frist repeated word in a string',() => {

    const str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    let result = repeatedWord(str);

    expect(result).toBe('summer');
  });

  it('should throw an error if the user enter either than a string',() => {

    const array = [1,2];
    function error(){
      repeatedWord(array);
    }

    expect(error).toThrow();
  });

  it('should throw an error if the user does not enter anything',() => {
    function error(){
      repeatedWord();
    }
    expect(error).toThrow();
  });
});
