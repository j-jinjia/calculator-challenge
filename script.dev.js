"use strict";

//global variables

/** Getting the innerHTML value when clicking on numbers button (1,2,3,4,5,6,7,8,9). Probably an array*/
var numberButtons = document.getElementsByClassName("calculator__number");
/** Getting the value of operator when clicking on operator buttons (+,-,*,/) */

var operatorButton = document.getElementsByClassName("calculator__operator");
/** Getting the value of restart button when clicking on AC button*/

var restartButton = document.getElementsByClassName("calculator__restart");
/** Getting the value of delete button when clicking on C button */

var deleteButton = document.getElementsByClassName("calculator__delete");
/** Getting the value of percentage when clicking on % button*/

var percentageButton = document.getElementsByClassName("calculator__percentage");
/** Getting the value of decimal  when clicking on . button*/

var decimalButton = document.getElementsByClassName("calculator__decimal");
/** Getting the value of equal when clicking on = button*/

var equalButton = document.getElementsByClassName("calculator__equal"); //functions

/** function for numbers button*/

/** Function for operators */

/** function for restart button*/

/** function for delete button*/

/** function for percentage button*/

/** function for equal button*/

/** function for decimal button*/
//logic

/** Looping through the number buttons array to give them click function and eventlistener
 * for index equal 0; index smaller than the length of the array, add 1 to index
 *  current index in numberButtons add the eventListener of click with the function_____
*/

for (var index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click");
}
/** Looping through the operator button array to give them click function and eventlistener
 * for index equal 0; index smaller than the length of the array, add 1 to index
 *  current index in operatorButton add the eventListener of click with the function_____
*/


for (var _index = 0; _index < operatorButtons.length; _index++) {
  operatorButton[_index].addEventListener("click");

  console.log("operatorButton");
}