// selecting DOM elements
const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('.screen');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const currentOperandText = document.getElementById('currentOperand');
const previousOperandText = document.getElementById('previousOperand');
const displayOperator = document.getElementById('displayOperator');
const clear = document.getElementById('clear');


// Variables
let currentOperand = '';
let previousOperand = '';
let operateur = '';
const negative = '+/-';


numbers.forEach((number)=>{
    number.addEventListener('click', (e)=>{
        handleNumber(e.target.textContent);
        
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click', (e)=>{
        handleOperator(e.target.textContent)
    })
})

equals.addEventListener('click', ()=>{
    currentOperand = calculate();
    currentOperandText.textContent = currentOperand;
});

clear.addEventListener('click', Clear)


// functions
function handleNumber(num){
    if(num == '+/-' && currentOperand == ''){
        num = '-';
    }else if(currentOperand !== '' && num == '+/-'){
        currentOperand = `-${currentOperand}`; 
    }
if(num === '.' && currentOperandText.textContent.includes('.')){
    return;
}
currentOperand += num;
currentOperandText.textContent = currentOperand;
currentOperandText.textContent = currentOperandText.textContent.replace('+/-', '')
}

function handleOperator(operator){
    if(currentOperand === ''){
        return
    }
    operateur = operator;
    previousOperandText.textContent = currentOperandText.textContent + ' ' + operateur;
    previousOperand = currentOperandText.textContent;
    currentOperandText.textContent = ''
    currentOperand = '';
}


function calculate(num1,operator,num2){

    num1 = Number(previousOperand);
    operator = operateur;
    num2 = Number(currentOperand);

    if(operator === '+'){
        return num1 + num2;
    }else if(operator === '-'){
        return num1 - num2;
    }else if(operator === '*'){
        return num1 * num2;
    }else if(operator === '/'){
        return num1 / num2;
    }else if(operator === '%'){
        return (num1/100) * num2;
    }
    
}

function Clear(){
    previousOperandText.textContent = '';
    currentOperandText.textContent = '';
    currentOperand = '';
    previousOperand = '';
}



