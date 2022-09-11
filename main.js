const disp = document.querySelector("#display");
const numBtns = document.querySelectorAll(".num-btns");
const opBtns = document.querySelectorAll(".op-btns");

let firstNumber = ""
let input = [];

/*const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");*/


function add(firstNumber, secondNumber) {
    const total = firstNumber + secondNumber;
    return total
    console.log(total);

}
function subtract(firstNumber, secondNumber) {
    const total = firstNumber - secondNumber;
    return total
    console.log(total);

}
function multiply(firstNumber, secondNumber) {
    const total = firstNumber * secondNumber;
    return total
    console.log(total);

}
function divide(firstNumber, secondNumber) {
    const total = firstNumber / secondNumber;
    return total
    console.log(total);

}

function operate(op, firstNumber, secondNumber) {
    if (op == "+") {
        return add(firstNumber, secondNumber);
    }
    else if (op == "-") {
        return subtract(firstNumber, secondNumber);
    }
    else if (op == "*") {
        return multiply(firstNumber, secondNumber);
    }
    else if (op == "/") {
        return divide(firstNumber, secondNumber);
    }

}

//display numbers
function display(num) {
    disp.textContent += num;
}

function calculate(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[1] == "+" || arr[1] == "-" || arr[1] == "*" || arr[1] == "/") {
            total += operate(arr[i], parseInt(arr[i-1]), parseInt(arr[i+1]));
            continue;
        }
        else if (arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/"){
            total = operate(arr[i], total, parseInt(arr[i+1]));
        }
        else if (arr[i] == "=") {
            return total;
        }
           
        
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
        //if op is hit display previous num + op
        input.push(disp.textContent);
        input.push(button.textContent);
        console.log(input);
        disp.textContent = "";
        if (button.textContent == "=") {
            console.log(calculate(input));
        }
        else if (button.textContent == "clear") {
            disp.textContent == "";
            input = [];
            console.log(input);
        }
    });
});



