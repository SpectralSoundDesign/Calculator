const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const textOut = document.getElementsByClassName("text-out");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");


function addNum(firstNumber, secondNumber) {
    textOut.innerHTML = firstNumber + secondNumber;
    console.log(firstNumber);

}

add.addEventListener("click", addNum);
