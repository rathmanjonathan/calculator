let operator = '';
let previousValue = '';
let currentValue = '';


const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const allClear = document.querySelector('.clear')
const equals = document.querySelector('.equals')
const deleteNum = document.querySelector('.delete')
const previousDisplay = document.querySelector('.previous')
const currentDisplay = document.querySelector('.current')

numbers.forEach((number) => number.addEventListener('click',(e) => {
    handleNumber(e.target.textContent)
    currentDisplay.textContent = currentValue;
}))

operators.forEach((operator) => operator.addEventListener('click', (e) => {
    handleOperator()
} ))

function handleNumber(num) {
    currentValue += num;
}

function handleOperator(operator) {
    
}