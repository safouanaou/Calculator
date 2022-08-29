// selecting DOM elements
const numbers = document.querySelectorAll('.numbers');
const screen = document.querySelector('.screen');
const display = document.getElementById('result');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const firstNumText = document.getElementById('firstNum');
const secondNumText = document.getElementById('secondNum');
const resultValue = document.getElementById('resultValue');



// Variables
let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;
let operateur = '';


    // Numbers' display functions
    numbers.forEach((number)=>{
        number.addEventListener('click', ()=>{
            firstNumText.textContent += number.textContent;
            console.log(screen)



        })
    })

    operators.forEach((operator)=>{
        operator.addEventListener('click', ()=>{
            firstNumber = parseInt(firstNumText.textContent);
            operateur = operator.textContent;
            const operate = function(num1, operator, num2){
                    
                num1 = firstNumber;
                num2 = secondNumber;
                operator = operateur;
            
            }


                // the second number button is a local function, it works only when operator button is initiated

                numbers.forEach((number)=>{
                    number.addEventListener('click', ()=>{
                    secondNumText.textContent += number.textContent;
                    secondNumber = parseInt(secondNumText.textContent);
                    firstNumText.remove();



                    
        })
    })


    equals.addEventListener('click', ()=>{

        const operate = function(num1, operator, num2){
    
            num1 = firstNumber;
            num2 = secondNumber;
            operator = operateur;
        
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
        resultNumber = operate();
    
        secondNumText.remove()
        resultValue.textContent = resultNumber;
        // displaying result
        
        
    })
})

})








