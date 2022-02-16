//global variables
let number1="0";
let number2="0"
let operator;
let result;

let numberButtons = document.querySelectorAll(".calculator__number");
const operationButtons = document.getElementsByClassName(".calculator__operator");
const restartButton = document.querySelector(".calculator__restart");
const screenResult = document.querySelector(".display__result");
const screenOperation = document.querySelector(".display__operation")
const equalButton = document.querySelector(".calculator__equal")


/**numberButtons: Looping through each number button and on click logging the button value into the operation screen */

const onNumberButtonsClick = (event) => {
    screenOperation.innerText += event.target.innerText;
};
for (let index = 0; index < numberButtons.length; index++) {
    numberButtons[index].addEventListener("click", onNumberButtonsClick);
};

/**operationButton */
const onOperationButtonsClick = (event) => {
    screenOperation.innerText += event.target.innerText;
};
for (let index = 0; index < operationButtons.length; index++) {
    operationButtons[index].addEventListener("click", onOperationButtonsClick);
};
/** AC button (restart). Defined function of clearing the screen display when AC button is clicked by adding event listener to the button. */
restartButton.addEventListener("click", (onRestartButtonClick));

const onRestartButtonClick = (event) => {
    screenOperation.innerHTML = clear(number1, number2, operator);
    screenResult.innerHTML = clear(number1, number2, operator);

};
const clear = (number1, number2, operator) => {
    if (num1 || num2 || operator) {
      return "";
    }
  }
/**Equal button (=): On click, performs calculate function and checks for which operator is being used to perform the calculation. Then it displays on screen the result and clears the operation. */
equalButton.addEventListener('click', (event)=> {
    screenResult.innerHTML = calculate(number1, num2, operator);
    screenOperation.innerHTML = clear(number1, number2, operator);
    
    
});
const calculate = (number1, number2, operator) => {
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
  
}
  
  
  


