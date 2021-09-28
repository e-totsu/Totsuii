/*
     ///////////////////
    ////  get DOM  ////
   ////  elements ////
  ///////////////////
*/
function $  ( target: any ) { return document.querySelector    ( target ) }
function $$ ( target: any ) { return document.querySelectorAll ( target ) }


module.exports = { $, $$ };