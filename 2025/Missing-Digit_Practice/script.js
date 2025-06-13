const example = "3? + 4 = 41";

function findMissingDigit(equation) {
  const parts = equation.split(" ");
  let missingDigit = "";
  let count = 0;

  const numOne = parts[0];
  const operator = parts[1];
  const numTwo = parts[2];
  const result = parts[4];

  if (numOne.includes("?")) {
    count++;
    missingDigit = numOne;
  }

  if (numTwo.includes("?")) {
    count++;
    missingDigit = numTwo;
  }

  if (result.includes("?")) {
    count++;
    missingDigit = result;
  }

  if (count != 1) {
    return -1;
  }

  for (let i = 0; i <= 9; i++) {
    const newMissingDigit = missingDigit.replace("?", i);

    if (newMissingDigit.length > 1 && newMissingDigit[0] === "0") {
      continue;
    }

    let num1 = numOne;
    let num2 = numTwo;
    let res = result;

    if (missingDigit === numOne) num1 = newMissingDigit;
    if (missingDigit === numTwo) num2 = newMissingDigit;
    if (missingDigit === result) res = newMissingDigit;

    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    res = parseInt(res, 10);

    if (operator === "+") {
      if (num1 + num2 === res) return i;
    } else if (operator === "-") {
      if (num1 - num2 === res) return i;
    } else if (operator === "*") {
      if (num1 * num2 === res) return i;
    } else if (operator === "/") {
      if (num2 !== 0 && num1 / num2 === res && num1 % num2 === 0) return i;
    }
  }
  return -1;
}

console.log(findMissingDigit("1? + 23 = 35"));
console.log(findMissingDigit("31 - ?2 = 150"));
console.log(findMissingDigit("10 / 0 = 0"));
console.log(findMissingDigit("0? + 1 = 2"));

/*
function replacer(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "?") {
      count++;
    }
  }

  if (count !== 1) {
    return "invalid";
  } else {
    return string.replace("?", "X");
  }
}

console.log(replacer("hel?lo"));
console.log(replacer("he??lo"));
console.log(replacer("hello"));*/
