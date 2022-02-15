"use strict";

//global variables

/** Getting the innerHTML value when clicking on numbers button (1,2,3,4,5,6,7,8,9). Probably an array*/
var numberButtons = document.getElementsByClassName("calculator__number");
console.log(numberButtons);
/** Getting the value of restart button when clicking on AC button*/

var restartButton = document.getElementsByClassName("calculator__restart");
/** Getting the value of delete button when clicking on C button */

var deleteButton = document.getElementsByClassName("calculator__delete");
/** Getting the value of operator when clicking on operator buttons (+,-,*,/) */

var operatorButton = document.getElementsByClassName("calculator__operator");
/** Getting the value of percentage when clicking on % button*/

var percentageButton = document.getElementsByClassName("calculator__percentage");
/** Getting the value of decimal  when clicking on . button*/

var decimalButton = document.getElementsByClassName("calculator__decimal");
/** Getting the value of equal when clicking on = button*/

var equalButton = document.getElementsByClassName("calculator__equal");
console.log(equalButton); //functions
//logic