const disp = document.querySelector("#display");
const numBtns = document.querySelectorAll(".num-btns");
const opBtns = document.querySelectorAll(".op-btns");
const equalBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");

let operation = '';
let previousOperand = '';

function clear() {
    disp.textContent = '';
    operation = undefined;
    previousOperand = '';
}

function displayNum(num) {
    disp.textContent += num;
}

function chooseOperation(op) {
    if (disp.textContent === '') {
        return;
    }
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = disp.textContent;
    disp.textContent = '';
}

function compute() {
    let total;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(disp.textContent);
    if (isNaN(prev) || isNaN(current)) {
        return;
    }

    switch (operation) {
        case '+':
            total = prev + current;
            break;
        case '-':
            total = prev - current;
            break;
        case '*':
            total = prev * current;
            break;
        case '/':
            if (current === 0) {
                disp.textContent = "Why???";
                return;
            }
            total = prev / current;
            break;
        default:
            return;
    }

    disp.textContent = total;
    operation = undefined;
    previousOperand = '';


}

numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        displayNum(button.textContent);
    });
});

opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        chooseOperation(button.textContent);
    });
});

equalBtn.addEventListener('click', () => {
    compute();
});

clearBtn.addEventListener('click', () => {
    clear();
});



