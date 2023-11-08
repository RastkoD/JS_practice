/*
// 1. Switch
let x = 14;
let y = 8;

let z = x;
x = y;
y = z;
*/

/*
// 2. To left
let x = 14;
let y = 8;
let z = 12;

let temp = x;
x = y;
y = z;
z = temp;
*/

/*
// 3. Sum of n numbers
let n = parseFloat(prompt("Enter a number: "));
let sum = 0;

for (let i = 0; i <= n; i++) {
  sum = sum + i;
}
*/

/*
// 4. min from given nums
let n = parseFloat(prompt("Enter a number: "));
let min = n;

let q;
do {
  let m = parseFloat(prompt("Enter a number: "));
  
  if (min > m) {
    min = m;
  }

  q = prompt("Continue? Y or N");
} while (q.toLowerCase() === 'y');

console.log("Minimum value: " + min);
*/

/*
// 5. Sum three
let x = 14;
let y = 8;
let z = 12;

let sum = x + y + z;
*/

console.log(min);