'use strict';
const {expect} = require('@jest/globals');
const LinkedList = require('./linkedlist.js');
const zipLists = require('./ll-zip.js');
describe( 'linked-lists-zip' ,()=>{
  // if it's create new linked list
  it( 'should create new linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll2.insert( 4 );
    ll2.insert( 5 );
    //act
    let merging = zipLists ( ll1,ll2 );
    //assert
    expect(merging.toString()).toEqual( '{ 1 } -> { 5 } -> { 10 } -> { 4 } -> NULL' );
  } );
  it( 'should create new linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );// ll1=1,10
    ll1.insert( 1 );
    ll2.insert( 4 );//ll2=7,5,4
    ll2.insert( 5 );
    ll2.insert( 7 );
    //act
    let merging = zipLists ( ll1,ll2 );
    //assert
    expect(merging.toString()).toEqual( '{ 1 } -> { 7 } -> { 10 } -> { 5 } -> { 4 } -> NULL' );
  } );
  it( 'should create new linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );// ll1=4,1,10
    ll1.insert( 1 );
    ll1.insert( 4 );//ll2=7,5
    ll2.insert( 5 );
    ll2.insert( 7 );
    //act
    let merging = zipLists ( ll1,ll2 );
    //assert
    expect(merging.toString()).toEqual( '{ 4 } -> { 7 } -> { 1 } -> { 5 } -> { 10 } -> NULL' );
  } );
  it( 'should throw an error with empty linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    //act
    function notFound(){
      zipLists ( ll1,ll2 );
    }
    //assert
    expect(notFound).toThrow('please input linked list');
  } );
});
