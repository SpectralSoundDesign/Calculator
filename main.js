const disp = document.querySelector("#display");
const numBtns = document.querySelectorAll(".num-btns");
const opBtns = document.querySelectorAll(".op-btns");

const input = [];

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

//display numbers
function display(num) {
    disp.textContent += num;
    if (num == "+") {
        input.push(disp.textContent);
        disp.textContent = "";
        console.log(input);
    }
}

//get input from number buttons
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.innerHTML);
    });
});

//get input from operator buttons
opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.innerHTML);
    });
});



