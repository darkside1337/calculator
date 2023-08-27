let firstOperand = "";
let operator = "";
let secondOperand = "";
let displayValue = "";
let buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".displayText");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const equateButton = document.querySelector(".equate");
const decimalButton = document.querySelector(".decimal");
const positiveNegativeButton = document.querySelector(".positiveNegative");
let enteringFirstOperand = true;
function clear() {
  display.textContent = "00000000";
  firstOperand = "";
  secondOperand = "";
  operator = "";
}
clearButton.addEventListener("click", function () {
  clear();
  enteringFirstOperand = true;
});
function updateDisplay() {
  display.textContent = displayValue;
}
function resetDisplay() {
  display.textContent = "";
}
updateDisplay();

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  if (x <= 0 || y <= 0) return "You went to school, right???";
  return x / y;
}
function remainder(x, y) {
  return x % y;
}
function decimal(x) {
  let toStr = x.toString();
  if (!toStr.includes(".")) {
    return toStr + ".";
  } else {
    return toStr;
  }
}
function positiveNegative(x) {
  return x * -1;
}

positiveNegativeButton.addEventListener("click", function () {
  if (firstOperand == "" && secondOperand == "") return;
  else if (firstOperand != "" && secondOperand != "") {
    let temp = positiveNegative(secondOperand);
    secondOperand = temp;
    displayValue = secondOperand;
    updateDisplay();
  } else if (firstOperand != "") {
    let temp = positiveNegative(firstOperand);
    firstOperand = temp;
    displayValue = firstOperand;
    updateDisplay();
  }
});

decimalButton.addEventListener("click", function () {
  if (firstOperand == "" && secondOperand == "") return;
  else if (firstOperand != "" && secondOperand != "") {
    let temp = decimal(secondOperand);
    secondOperand = temp;
    displayValue = secondOperand;
    updateDisplay();
  } else if (firstOperand != "") {
    let temp = decimal(firstOperand);
    firstOperand = temp;
    displayValue = firstOperand;
    updateDisplay();
  }
});
function operate(operator, x, y) {
  if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "+") {
    return add(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else if (operator === "/") {
    return divide(x, y);
  } else if (operator === "%") {
    return remainder(x, y);
  }
}

operators.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", function () {
    if (secondOperand !== "") {
      let result = String(
        operate(operator, parseFloat(firstOperand), parseFloat(secondOperand))
      );
      displayValue = result;
      updateDisplay();
      firstOperand = result;
      secondOperand = "";
    }
    operator = operatorButton.value;
    displayValue = operator;
    enteringFirstOperand = false;
    updateDisplay();
  });
});

operands.forEach(function (operand) {
  operand.addEventListener("click", function () {
    if (enteringFirstOperand) {
      firstOperand += operand.value;
      displayValue = firstOperand;
    } else {
      secondOperand += operand.value;
      displayValue = secondOperand;
    }
    updateDisplay();
  });
});

equateButton.addEventListener("click", function () {
  if (firstOperand === "" || secondOperand === "") {
    displayValue = "Error! Try again :)";
    updateDisplay();
    return;
  } else if (firstOperand !== "" && secondOperand !== "" && operator !== "") {
    let result = String(
      operate(operator, parseFloat(firstOperand), parseFloat(secondOperand))
    );
    displayValue = result;
    updateDisplay();
    firstOperand = result;
    secondOperand = "";
    enteringFirstOperand = false;
  }
});
