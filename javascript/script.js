// Javascript for Calculator Task

//To display input values
let result = document.getElementById("inputext");

// To calculate equations
let calculate = (number) => {
  result.value = result.value + number;
};

// To display results of equations
let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid Input");
  }
};

//To clear all input values
function clr() {
  result.value = " ";
}

//To act as backspace / clear one digit
function del() {
  result.value = result.value.slice(0, -1);
}
