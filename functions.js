/*
let x = parseFloat(prompt("Enter first number: "));
let y = parseFloat(prompt("Enter second number: "));

let returnSmallest = (a, b) => {
  if (a > b) {
    alert("Smaller number is: " + b)
  } else {
    alert("Smaller number is: " + a)
  }
}

returnSmallest(x, y);
*/



/*
let string = prompt("Enter a string to be checked");

function countLetters(str) {
  let letterArr = str.split("");
  let letters = [];
  let numOfTimes = 1;

  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] === letterArr[i + 1]) {
      numOfTimes++;
    }
    else {
      let value = `${numOfTimes}`
      letters = [...letters, value];
      numOfTimes = 1;
      console.log(letters)
    }
  }
  let max = Math.max(...letters);
  alert(max)
}

countLetters(string);
*/


