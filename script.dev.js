"use strict";

//global variables
var number1 = "0";
var number2 = "0";
var operator;
var result;
var numberButtons = document.querySelectorAll(".calculator__number");
var operationButtons = document.querySelectorAll(".calculator__operator");
var restartButton = document.querySelector(".calculator__restart");
var screenResult = document.getElementsByClassName("display__result");
var screenOperation = document.querySelector(".display__operation");
var equalButton = document.querySelector(".calculator__equal");
/**numberButtons: Looping through each number button and on click logging the button value into the operation screen */

var onNumberButtonsClick = function onNumberButtonsClick(event) {
  screenOperation.innerText += event.target.innerText;
  number1 = event.targe.innerText;
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
  screenOperation.innerHTML = "";
  screenResult.innerText = "";
  console.log("hello"); //screenOperation.innerHTML = clear(number1, number2, operator);
  //screenResult.innerHTML = clear(number1, number2, operator);
};
/**const clear = (number1, number2, operator) => {
    if (number1 || number2 || operator) {
      return "";
    }
  }*/

/**Equal button (=): On click, performs calculate function and checks for which operator is being used to perform the calculation. Then it displays on screen the result and clears the operation. */


equalButton.addEventListener('click', function (event) {
  screenResult.innerHTML = operation(number1, number2, operator); //screenOperation.innerHTML = clear(number1, number2, operator);
});

var operation = function operation(number1, number2, operator) {
  if (operator === "+") {
    return Number(number1) + Number(number2);
  } else if (operator === "-") {
    var _result = parseInt(number) - parseInt(number2);

    return _result;
  } else if (operator === "x") {
    return parseInt(number1) * parseInt(number2);
  } else if (operator === "÷") {
    var _result2 = parseInt(number1) / parseInt(number2);

    return _result2;
  } else if (operator === "%") {
    return parseInt(number1) / 100 || parseInt(number2) / 100;
  } else {
    return;
  }
};