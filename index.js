// inputValue,numberKeys,key-17,key-18
let inputValue = document.querySelector(".inputValue");
let numberKeys = document.querySelector(".numberKeys");
let reset = document.querySelector(".key-17");
let deletes = document.querySelector(".key-4");
let solve = document.querySelector(".key-18");
let addition = document.querySelector(".key-8");
let subtraction = document.querySelector(".key-12");
let multiplication = document.querySelector(".key-16");
let division = document.querySelector(".key-5");
let decimal = document.querySelector(".key-13");
let operator = document.querySelectorAll(".operator");
let finalResult;

// display
function display(value) {
    inputValue.value += value;

}

// deletes
function deletion() {
  let finalResult = inputValue.value.slice(0, -1);
  resets();
  display(finalResult);
}

// resetting the values
function resets() {
  inputValue.value = "";
}

// solve
function solves(value) {
  // Replace 'x' with '*' for multiplication
  value = value.replace(/x/g, "*");

  try {
    finalResult = eval(value);
    console.log(finalResult);
    resets();
    display(finalResult);
  } catch (error) {
    console.error("Error in calculation:", error);
    resets();
    display("Error");
  }
}

// apply method for displaying elements
numberKeys.addEventListener("click", (e) => {
  if (e.target.matches(".key")) {
    let result = e.target.textContent;
    display(result);
  }
});

// applying method for deletion
deletes.addEventListener("click", () => {
  deletion();
});

// applying method for reset
reset.addEventListener("click", () => {
  resets();
});

// finding result
solve.addEventListener("click", () => {
  let val = inputValue.value;
  solves(val);
});
