function add(a , b) {
    return +a + +b;
};
function subtract(a , b) {
    return a - b;
};
function multiply(a , b) {
    return a * b;
};
function divide(a , b) {
    return a / b;
};

function operate (operator, a , b) {
    if (operator == '+') return add(a , b);
    else if(operator == '-') return subtract(a , b);
    else if(operator == '*') return multiply(a , b);
    else if(operator == '/') return divide(a , b);
    else return `error operator is: ${operator}, a: ${a}, b: ${b}`;
}
const numbers = document.querySelectorAll('.number');
let arrayNumbers = [...numbers];
const result = document.querySelector('#result');
let equation = document.querySelector("#print")

let outputNumber = 0;
for(let i = 0; i <= 9; i++) {
    let number = arrayNumbers[i].textContent;
    arrayNumbers[i].addEventListener('click',() => {
        result.textContent += number;
        return outputNumber = result.textContent;
    })  
};

const calc = document.querySelectorAll('.operator');
let operators = [...calc];
for(let i = 0; i < operators.length ; i++ ) {
    operators[i].addEventListener('click', ()=>{
        let calcOperator = operators[i].textContent; 
        let firstNumber = outputNumber;
        let secondNumber;
        equation.textContent += ` ${firstNumber} ${calcOperator}`;
        result.textContent = "";
    })
}


    
console.log(operators)


