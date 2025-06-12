let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let c = parseFloat(prompt("Enter third number: "));
let d = parseFloat(prompt("Enter fourth number: "));
let maks;

/*
if (a >= b && a >= c && a >= d) {
  maks = a;
} 
else if (b >= a && b >= c && b >= d) {
  maks = b;
} 
else if (c >= a && c >= b && c >= d) {
  maks = c;
} 
else {
  maks = d;
}
*/

console.log(Math.max(a, b, c, d))

/*
console.log(`Najveci broj izmedju njih je ${maks}`);
console.log("The largest number is " + maks);
*/