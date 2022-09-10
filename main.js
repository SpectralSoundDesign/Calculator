const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const textOut = document.getElementsByClassName("text-out");

/*const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");*/


function add(firstNumber, secondNumber) {
    const total = firstNumber + secondNumber;
    console.log(total);

}
function subtract(firstNumber, secondNumber) {
    const total = firstNumber - secondNumber;
    console.log(total);

}
function multiply(firstNumber, secondNumber) {
    const total = firstNumber * secondNumber;
    console.log(total);

}
function divide(firstNumber, secondNumber) {
    const total = firstNumber / secondNumber;
    console.log(total);

}

function operate(op, firstNumber, secondNumber) {
    if (op == "+") {
        add(firstNumber, secondNumber);
    }
    else if (op == "-") {
        subtract(firstNumber, secondNumber);
    }
    else if (op == "*") {
        multiply(firstNumber, secondNumber);
    }
    else if (op == "/") {
        divide(firstNumber, secondNumber);
    }

}

