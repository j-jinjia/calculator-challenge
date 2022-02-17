//global variables
let number1="";
let number2=""
let operator;
let result;

let numberButtons = document.querySelectorAll(".calculator__number");
let operationButtons = document.querySelectorAll(".calculator__operator");
const restartButton = document.querySelector(".calculator__restart");
const screenResult = document.querySelector(".display__result");
const screenOperation = document.querySelector(".display__operation")
const equalButton = document.querySelector(".calculator__equal")

/**numberButtons: Looping through each number button and on click logging the button value into the operation screen */

const onNumberButtonsClick = (event) => {
    screenOperation.innerText += event.target.innerText;
    number1+=event.target.innerText;
};
for (let index = 0; index < numberButtons.length; index++) {
    numberButtons[index].addEventListener("click", onNumberButtonsClick);

};

/**operationButton */
const onOperationButtonsClick = (event) => {
    screenOperation.innerText += event.target.innerText;
    number2 = number1;
    number1="";
    operator=event.target.innerText;
};
for (let index = 0; index < operationButtons.length; index++) {
    operationButtons[index].addEventListener("click", onOperationButtonsClick);
};



/**Equal button (=): On click, performs calculate function and checks for which operator is being used to perform the calculation. Then it displays on screen the result and clears the operation. */


const operation = (number1, number2, operator) => {

    if (typeof number1 !== "number" || typeof number2 !== "number" ){
        number1= Number(number1);
        number2=Number(number2);
    }
    if (operator === "+" ) {
        return number1 + number2;
    } else if (operator === "-"){
        return number1 - number2;
    } else if (operator === "x") {
        return number1 * number2;
    } else if (operator === "÷") {
        return number2 / number1;
    } else if (operator === "%") {
        return number1 / 100 || number2 / 100;
    } else {
        return;
    }
    
};
equalButton.addEventListener('click', (event)=> {
    screenResult.innerHTML = operation(number1, number2, operator);
    //screenOperation.innerHTML ="";
    
    
});

/** AC button (restart). Defined function of clearing the screen display when AC button is clicked by adding event listener to the button. */
const onRestartButtonClick = (event) => {
    screenOperation.innerText ="";
    screenResult.innerText="";
    number1="";
    number2="";
    operator="";
};
    
restartButton.addEventListener("click", onRestartButtonClick);

    
    
    
    