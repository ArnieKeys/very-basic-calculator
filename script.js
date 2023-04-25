let numEL1 = document.getElementById("num1-el");
let numEL2 = document.getElementById("num2-el");

let add = document.getElementById("add");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let subtract = document.getElementById("subtract");

let totalEl = document.getElementById("total");

numEL1.textContent = 5;
numEL2.textContent = 5;
numEL1 = 5;
numEL2 = 5;

function addNumbers() {
  let total = numEL1 + numEL2;
  totalEl.textContent = total;
}
function multiplyNumbers() {
  let total = numEL1 * numEL2;
  totalEl.textContent = total;
}
function divideNumbers() {
  let total = numEL1 / numEL2;
  totalEl.textContent = total;
}
function subtractNumbers() {
  let total = numEL1 - numEL2;
  totalEl.textContent = total;
}

add.addEventListener("click", 
addNumbers);
multiply.addEventListener("click", multiplyNumbers);
divide.addEventListener("click", divideNumbers);
subtract.addEventListener("click", subtractNumbers);
