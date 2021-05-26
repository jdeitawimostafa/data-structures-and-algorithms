'use strict';
const Node =require('./node.js');
const LinkedList = require('./linkedlist.js');

function zipLists( ll1,ll2 ){
  //create new linked list
  let newLinkedList = new LinkedList () ;
  //find the values for each linked list
  let val = ll1.head ;
  let val2 = ll2.head;
  // 1st case :
  if ( val===null && val2===null ){
    throw new Error( 'please input linked list' );
  }
  else{
    // iterate according to the linked list
    while( val || val2 ){
      if (val){
        //insert 1st value from 1st linked list
        newLinkedList.append( val.value );
        //update value to be next node for 1st and 2nd linked list
        val = val.next ;
      }
      if(val2){
        //insert 1st value from 2nd linked list
        newLinkedList.append( val2.value );
        val2 = val2.next ;
      }
    }
    console.log( newLinkedList.toString() );
    //return the new linked list
    return newLinkedList.toString ();
  }
}
module.exports = zipLists ;
