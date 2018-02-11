document.addEventListener("DOMContentLoaded", function(event) {
  let displayArr = [];
  Array.from(document.getElementsByClassName("btn")).map(function(el) {
    let nums = /^\-?\d$/g;
    const validOp = () => displayArr.length === 1 ? displayArr[0].match(nums) : displayArr[displayArr.length - 1].match(nums);
    const updateDis = () => document.getElementById("display").innerText = displayArr.join("");
    function evaluate(arr) {
      return eval(displayArr.join(""));
    }
    el.addEventListener('click', function() {
      if (el.classList.contains("num")) {
        displayArr.push(el.innerText);
        updateDis();
      } else if (el.classList.contains("op") && validOp()) {
        displayArr.push(el.innerText);
        updateDis();
      } else if (el.classList.contains("dec") && validOp()) {
        displayArr.push(el.innerText);
        updateDis();
      } else if (el.classList.contains("ce")) {
        displayArr.pop();
        updateDis();
      } else if (el.classList.contains("ac")) {
        displayArr = [];
        updateDis();
      } else if (el.classList.contains("eq")) {
        displayArr = [`${evaluate(displayArr)}`];
        updateDis();
      }
    });
  });
});
