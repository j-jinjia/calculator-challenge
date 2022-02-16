"use strict";

//global variables
var number1 = "0";
var number2 = "0";
var operator;
var result;
var numberButtons = document.querySelectorAll(".calculator__number");
var operationButtons = document.getElementsByClassName(".calculator__operator");
var restartButton = document.querySelector(".calculator__restart");
var screenResult = document.querySelector(".display__result");
var screenOperation = document.querySelector(".display__operation");
var equalButton = document.querySelector(".calculator__equal");
/**numberButtons: Looping through each number button and on click logging the button value into the operation screen */

var onNumberButtonsClick = function onNumberButtonsClick(event) {
  screenOperation.innerText += event.target.innerText;
};

for (var index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", onNumberButtonsClick);
}

;
/**operationButton */

var onOperationButtonsClick = function onOperationButtonsClick(event) {
  screenOperation.innerText += event.target.innerText;
};

for (var _index = 0; _index < operationButtons.length; _index++) {
  operationButtons[_index].addEventListener("click", onOperationButtonsClick);
}

;
/** AC button (restart). Defined function of clearing the screen display when AC button is clicked by adding event listener to the button. */

restartButton.addEventListener("click", onRestartButtonClick);

var onRestartButtonClick = function onRestartButtonClick(event) {
  screenOperation.innerHTML = clear(number1, number2, operator);
  screenResult.innerHTML = clear(number1, number2, operator);
};

var clear = function clear(number1, number2, operator) {
  if (num1 || num2 || operator) {
    return "";
  }
};
/**Equal button (=): On click, performs calculate function and checks for which operator is being used to perform the calculation. Then it displays on screen the result and clears the operation. */


equalButton.addEventListener('click', function (event) {
  screenResult.innerHTML = calculate(number1, num2, operator);
  screenOperation.innerHTML = clear(number1, number2, operator);
});

var calculate = function calculate(number1, number2, operator) {
  if (operator === "+") {
    return parseInt(number1) + parseInt(number2);
  } else if (operator === "-") {
    return parseInt(number) - parseInt(number2);
  } else if (operator === "x") {
    return parseInt(number1) * parseInt(number2);
  } else if (operator === "÷") {
    return parseInt(number1) / parseInt(number2);
  } else if (operator === "%") {
    return parseInt(number1) / 100 || parseInt(number2) / 100;
  } else {
    return;
  }
};