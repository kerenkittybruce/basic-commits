// Javascript for Calculator Task

//To display input values
let sum = document.getElementById("inputext");

// To calculate equations
let calculate = (number) => {
  sum.value = sum.value + number;
};

let addToSum = (operator) => {
  sum.value = sum.value + operator;
};

// To display results of equations
let evaluateSum = () => {
  try {
    sum.value = eval(sum.value);
  } catch (err) {
    alert("Oops! 🤭 There seems to be an issue here... 🤔💭 Please enter valid input values.");
  }
};

//To clear all input values
function clearSum() {
  sum.value = "0";
}

//To act as backspace / clear one digit
function deleteSum() {
  sum.value = sum.value.slice(0, -1);
}
