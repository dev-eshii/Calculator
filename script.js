// script.js

let currentValue = '';
let previousValue = '';
let operator = '';

function appendNumber(number) {
    // Append the number to the current value
    currentValue += number;
    updateDisplay(currentValue);
}

function appendOperation(op) {
    if (op === '()') {
        // Handle parentheses
        if (currentValue.includes('(') && !currentValue.includes(')')) {
            currentValue += ')';
        } else if (!currentValue.includes('(')) {
            currentValue += '(';
        }
        updateDisplay(currentValue);
    } else if (op === '%') {
        // Handle percentage
        currentValue = (parseFloat(currentValue) / 100).toString();
        updateDisplay(currentValue);
    }
}

function setOperation(op) {
    if (currentValue === '') {
        if (op === '-') {
            // Handle negative sign at the start
            currentValue = '-';
        }
    } else {
        // Save the current value and operation
        previousValue = currentValue;
        operator = op;
        currentValue = '';
        updateDisplay(currentValue);
    }
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    updateDisplay(currentValue);
}

function calculateResult() {
    if (previousValue !== '' && operator !== '' && currentValue !== '') {
        try {
            // Build the expression and evaluate it
            const expression = `${previousValue}${operator}${currentValue}`;
            const result = eval(expression);
            currentValue = result.toString();
            previousValue = '';
            operator = '';
            updateDisplay(currentValue);
        } catch (error) {
            currentValue = 'Error';
            updateDisplay(currentValue);
        }
    }
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}



