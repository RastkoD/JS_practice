let i = 1;
let j = parseFloat(prompt("Enter a number: "));

while (i <= j) {
  if (i % 3 == 0 && i % 5 == 0) {
    const newP = document.createElement("p");
    const newContent = document.createTextNode("Fizz Buzz");
    newP.appendChild(newContent);
    newP.style = "color: purple; font-weight: 900;"
    document.body.appendChild(newP);
  } else if (i % 5 == 0) {
    const newP = document.createElement("p");
    const newContent = document.createTextNode("Buzz");
    newP.appendChild(newContent);
    newP.style = "color: red; font-weight: 600;"
    document.body.appendChild(newP);
  } else if (i % 3 == 0) {
    const newP = document.createElement("p");
    const newContent = document.createTextNode("Fizz");
    newP.appendChild(newContent);
    newP.style = "color: blue; font-weight: 600;"
    document.body.appendChild(newP);
  } else {
    const newP = document.createElement("p");
    const newContent = document.createTextNode(`${i}`);
    newP.appendChild(newContent);
    document.body.appendChild(newP);
  }
  i++
}

