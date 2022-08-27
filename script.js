// selecting DOM elements
const numbers = document.querySelectorAll('.numbers');
const display = document.getElementById('result');
const operators = document.querySelectorAll('.operator');

// Operate function
const operate = function(num1, operator, num2){

    // operations
const add = function(num1, num2){
    return num1+num2;
}

const subtract = function(num1, num2){
    return num1-num2;
}

const multiply = function(num1, num2){
    return num1*num2;
}


const divide = function(num1, num2){
    return num1/num2;
}


    if(operator == '+'){
        return add(num1, num2);
    }else if(operator == '-'){
        return subtract(num1, num2);
    }else if(operator == '*'){
        return multiply(num1, num2);
    }else if(operator == '/'){
        return divide(num1, num2);
    }
}

operate(1,'+', 2)


// Variables
let displayValue = 0;


// Numbers' display functions
numbers.forEach((number)=>{
    number.addEventListener('click', ()=>{
        displayValue = parseInt(number.textContent);
        const firstNum = document.createElement('p');
        firstNum.textContent = displayValue;
        display.appendChild(firstNum);
    })
})



