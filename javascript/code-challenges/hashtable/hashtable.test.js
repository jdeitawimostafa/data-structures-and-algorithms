const Node = require('./hashtable.js');
const LinkedList = require('./hashtable.js');
const hashTable = require('./hashtable.js');

const {expect} = require('@jest/globals');

describe( 'hashtable test', () => {

  it( 'should Adding a key/value to your hashtable results in the value being in the data structure', () => {

    const newVal = new hashTable();
    newVal.addToTable( 'mostafa', 'boss' );
    expect( newVal.get( 'mostafa' ) ).toEqual( 'boss' );
  } );

  it( 'should Retrieving based on a key returns the value stored', () => {

    const newVal = new hashTable();
    newVal.addToTable( 'sam', 'student' );
    expect( newVal.get( 'sam' ) ).toEqual( 'student' );
  } );

  it( 'Successfully returns null for a key that does not exist in the hashTable', () => {

    const newVal = new hashTable();
    newVal.addToTable( 'ahmad', 'teacher' );
    expect( newVal.get( 'amjad' ) ).toBeNull();
  } );

  it( 'Successfully handle a collision within the hashTable', () => {

    const newVal = new hashTable();
    newVal.addToTable( 'mostafa', 'boss' );
    newVal.addToTable( 'jamal', 'Designer' );
    expect( newVal.hash( 'mostafa' ) ).toEqual( 0 );
    expect( newVal.hash( 'jamal' ) ).toEqual( 0 );
  } );

  //test for retrieve a value from a bucket
  it( 'Successfully retrieve a value from a bucket within the hashTable that has a collision', () => {

    const newVal = new hashTable();
    newVal.addToTable( 'mostafa', 'boss' );
    newVal.addToTable( 'jamal', 'Designer' );
    expect( newVal.hash( 'mostafa' ) ).toEqual( 0 );
    expect( newVal.hash( 'jamal' ) ).toEqual( 0 );
    expect( newVal.get( 'jamal' ) ).toEqual( 'Designer' );
  } );

  it( 'Successfully hash a key to an in-range value', () => {

    const newVal = new hashTable( 2 );

    expect( newVal.hash( 'jamal' ) ).toEqual( 0 );
  } );
} );
