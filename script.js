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

    if(b === 0) return alert("ERROR: Can't divide by zero!")
    return a / b;
}

function operate(firstNum, secondNum, operator) {

    if(firstNum === "" || secondNum === "" || operator === "") {

        return alert("ERROR: One of the numbers or operators is empty!");
    }

    else if (operator === "+") {
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

let result;
let firstNumber = "";
let secondNumber = "";
let operator = "";

const display = document.querySelector("#display");
const digitBtn = document.querySelectorAll(".digit");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".ac");
const backspace = document.querySelector(".backspace");
const btnEqual = document.querySelector(".equal")


clearBtn.addEventListener("click", () => {
    firstNumber = secondNumber = operator = "";
    result = undefined;
    return display.textContent = "";
});


for(let i = 0; i < digitBtn.length; i++) {

    digitBtn[i].addEventListener("click", () => {

        if(!operator) {
                    
        firstNumber += digitBtn[i].textContent
        display.textContent = firstNumber;

        }

        else {

            secondNumber += digitBtn[i].textContent;
            display.textContent = secondNumber;
        }
                
    });
};


for(let i = 0; i < operatorBtn.length; i++) {

    
    operatorBtn[i].addEventListener("click", () => {

        if(!secondNumber) {

            operator = operatorBtn[i].textContent;
            firstNumber = parseFloat(firstNumber);
        }

        else {

            secondNumber = parseFloat(secondNumber);
            operate(firstNumber, secondNumber, operator);
            display.textContent = result;
            operator = operatorBtn[i].textContent;
            firstNumber = result;
            secondNumber = "";
        }
    
    });
}

btnEqual.addEventListener('click', () => {

    secondNumber = parseFloat(secondNumber);
    operate(firstNumber, secondNumber, operator);
    display.textContent = result;
    firstNumber = secondNumber = operator = "";

})










