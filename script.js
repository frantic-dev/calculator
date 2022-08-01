function add(a , b) {  //math operations 
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

let outputNumber = 0;       //clicking on number displays it on result div
for(let i = 0; i <= 9; i++) {
    let number = arrayNumbers[i].textContent;
    arrayNumbers[i].addEventListener('click',() => {
        result.textContent += number;
        return outputNumber = result.textContent;
    })  
};

const calc = document.querySelectorAll('.operator');
let operators = [...calc];

        //clicking on operator returns the outputNumber to equation div with the operator ,then result clears 
for(let i = 0; i < operators.length ; i++ ) {
    operators[i].addEventListener('click', ()=>{
        let calcOperator = operators[i].textContent; 
        let firstNumber = outputNumber;
        equation.textContent += ` ${firstNumber} ${calcOperator}`;
        result.textContent = "";
    })
}
            //resets
const clear = document.querySelector('#clear');

clear.addEventListener('click' , () => {
    outputNumber = 0
    equation.textContent = "";
    result.textContent = "";
} )


    
console.log(operators)


