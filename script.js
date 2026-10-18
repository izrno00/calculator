function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator) {

    let result;

    if (operator === "+") {
        result = add(firstNum, secondNum);
    }
    else if(operator === "-") {

        result = subtract(firstNum, secondNum);
        
    }

    else if(operator === "X") {

        result = multiply(firstNum, secondNum);
    }

    else if(operator === "/") {
        result = divide(firstNum, secondNum);
    }

    return result;


}

let firstNumber = "";
let secondNumber;
let operator;

const display = document.querySelector("#display");
const digitBtn = document.querySelectorAll(".digit");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".ac");
const backspace = document.querySelector(".backspace");
const btnEqual = document.querySelector(".equal");


clearBtn.addEventListener("click", () => {
    firstNumber = secondNumber = operator = "";
    return display.textContent = "";
});


for(let i = 0; i < digitBtn.length; i++) {

    digitBtn[i].addEventListener("click", () => {
        
        firstNumber += digitBtn[i].textContent
        display.textContent = firstNumber;
        return parseFloat(firstNumber);
    
    });

};

for(let i = 0; i < operatorBtn.length; i++) {

    operatorBtn[i].addEventListener("click", () => {

        operator = operatorBtn[i].textContent;
        firstNumber = parseFloat(firstNumber);
    
    
        }
    );
}






