let operator = '';
let previousValue = '';
let currentValue = '';


const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const allClear = document.querySelector('.clear')
const equals = document.querySelectorAll('equals')
const delete = document.querySelectorAll('.delete')
const previousDisplay = document.querySelectorAll('.previous')
const currentDisplay = document.querySelectorAll('.current')

numbers.forEach((number) => number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
    currentDisplay.textContent = currentValue;
}))

function handleNumber(num) {
    if(currentValue.length <=)
    //currentValue += num;
    console.log(num)
}