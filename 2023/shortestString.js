let first = prompt("Enter first string:")
let second = prompt("Enter second string:")
let third = prompt("Enter third string:")
let fourth = prompt("Enter fourth string:")


//shortest but not empty
let array = [first, second, third, fourth];

for (let i = 0; i < array.length; i++) {
  if (array[i].length === 0) {
    delete array[i];
  }
}

let strMin = array.reduce(function(a, b) {
  return a.length <= b.length ? a : b;
})
  alert(strMin);
