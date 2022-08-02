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
    else if(operator == '×') return multiply(a , b);
    else if(operator == '÷') return divide(a , b);
    else return `error operator is: ${operator}, a: ${a}, b: ${b}`;
}
const numbers = document.querySelectorAll('.number');
let arrayNumbers = [...numbers];
const result = document.querySelector('#result');
let equation = document.querySelector("#print")

let outputNumber = "";       //clicking on number displays it on result div
for(let i = 0; i <= 9; i++) {
    let number = arrayNumbers[i].textContent;
    arrayNumbers[i].addEventListener('click',() => {
        if(equation.textContent.slice(-1) == "=") {
            equation.textContent = "";
            result.textContent = ""; 
        } 
        result.textContent += number;
        return outputNumber = result.textContent;
    })  
};

const calc = document.querySelectorAll('.operator');
let operators = [...calc];
let calcOperator;
let firstNumber;
let newEquation;
let array;
        //clicking on operator returns the outputNumber to equation div with the operator ,then result clears 
for(let i = 0; i < operators.length ; i++ ) {
    operators[i].addEventListener('click', ()=>{ 
        calcOperator = operators[i].textContent; 
        firstNumber = outputNumber;
        if(equation.textContent.slice(-1) == "=") {
            equation.textContent = "";
                firstNumber = result.textContent
            result.textContent = ""; 
        } 
        equation.textContent += ` ${firstNumber} ${calcOperator}`;
        result.textContent = "";
        newEquation = equation.textContent;
        array = [...newEquation.split(' ')]
        console.log(array)
        if(array.length == 5) {
            equation.textContent = " " + operate(array[2], array[1], array[3]) + " " + array[4];
        }
    })
}
            //resets
const clear = document.querySelector('#clear');

clear.addEventListener('click' , () => {
    outputNumber = 0
    equation.textContent = "";
    result.textContent = "";
} )


const equal = document.querySelector('#equal');

equal.addEventListener('click', () =>{
    firstNumber = [...equation.textContent.split(' ')]
    equation.textContent += " " + outputNumber + " =";
    result.textContent = operate(calcOperator, firstNumber[1], outputNumber);
    firstNumber = [...equation.textContent];
})

const del = document.querySelector("#delete");

del.addEventListener('click', () => {
    outputNumber = outputNumber.slice(0, -1);
    result.textContent = outputNumber;
})






