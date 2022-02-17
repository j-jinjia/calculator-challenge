"use strict";

//global variables
var number1 = "";
var number2 = "";
var operator;
var numberButtons = document.querySelectorAll(".calculator__number");
var operationButtons = document.querySelectorAll(".calculator__operator");
var restartButton = document.querySelector(".calculator__restart");
var deleteButton = document.querySelector(".calculator__delete");
var screenResult = document.querySelector(".display__result");
var screenOperation = document.querySelector(".display__operation");
var equalButton = document.querySelector(".calculator__equal");
/**numberButtons: Looping through each number button and on click logging the button value into the operation screen 
 * When clicking in any number button (0,1,2,3,4,5,6,7,8,9,.) display on screen.
 * All the numbers pressed are stored in a variable
*/

var onNumberButtonsClick = function onNumberButtonsClick(event) {
  screenOperation.innerText += event.target.innerText;
  number1 += event.target.innerText;
};

for (var index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", onNumberButtonsClick);
}

;
/**operationButton When clicking in any operator button (plus, minus, miltiplyer, division and percentage) display on screen.
 * Store the first number into another variable and clear the first number variable in order to reuse. 
 * Store operator symbol. 
 */

var onOperationButtonsClick = function onOperationButtonsClick(event) {
  screenOperation.innerText += event.target.innerText;
  number2 = number1;
  number1 = "";
  operator = event.target.innerText;
};

for (var _index = 0; _index < operationButtons.length; _index++) {
  operationButtons[_index].addEventListener("click", onOperationButtonsClick);
}

;
/**Equal button (=): On click, performs calculate function and checks for which operator is being used to perform the calculation. Then it displays on screen the result and clears the operation. */

var operation = function operation(number1, number2, operator) {
  /**Cheking if either number1 or number2 are number data type. if either one is a number data type, convert them into number data type. 
   * This allows to check for data type before running the second if statement block with operators.
   */
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    number1 = Number(number1);
    number2 = Number(number2);
  }

  if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number2 - number1;
  } else if (operator === "x") {
    return number1 * number2;
  } else if (operator === "÷") {
    return number2 / number1;
  } else if (operator === "%") {
    return number1 / 100 || number2 / 100;
  } else {
    return "Syntax Error";
  }
};

equalButton.addEventListener('click', function (event) {
  screenResult.innerHTML = operation(number1, number2, operator);
});
/** AC button (restart). Defined function of clearing the screen display when AC button is clicked by adding event listener to the button. 
 * When restart button is clicked, screen display is cleared and variables storing numbers and operators are cleared too.
*/

var onRestartButtonClick = function onRestartButtonClick(event) {
  screenOperation.innerText = "";
  screenResult.innerText = "";
  number1 = "";
  number2 = "";
  operator = "";
};

restartButton.addEventListener("click", onRestartButtonClick);