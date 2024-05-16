//Array
/*
let arr = ["vrabac", "golub", "svraka"];

console.log(arr);

arr.push("vrana");

console.log(arr);

arr.unshift("soko");

console.log(arr);

console.log(arr[0]);

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr[3] = "roda";

console.log(arr);

arr.pop();

console.log(arr);

arr.shift();

console.log(arr);
*/

/*
let favouriteLizards = ["bearded dragon", "slamander", "anole", "iguana"];

console.log(favouriteLizards.slice(0, 2));

favouriteLizards.splice(0, 2);

console.log(favouriteLizards);
*/

//------------------------------------------------
//Object
/*
const bite = {
  name: "brown chub",
  numberOfBites: 5,
  class: "K, biggibus",
  nickname: ["topsail drummer", "gray fish", "chubby chub"],
  conservationStatus: "least concern",
  metaData: {
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Kyphosus_bigibbus_Maldives.JPG/1280px-Kyphosus_bigibbus_Maldives.JPG",
    longitude: 234242,
    latitude: 234242,
  },
};

console.log(bite);

//crud
bite.isCool = false;
console.log(bite.isCool);

console.log(bite.name);
console.log(bite["nickname"]);

bite.isCool = true;
console.log(bite.isCool);

delete bite.conservationStatus;
console.log(bite.conservationStatus);

console.log(bite);
console.log(bite.nickname[1]);
console.log(bite.metaData.picture);
*/

//------------------------------------------------
//for loops
/*
//let turtleString = "turtle";

//console.log(turtleString[2]);

//for(let i = 0; i < turtleString.length; i++) {
//  console.log(turtleString[i]);
//};

//let planes = ["apache", "f22", "c130", "sr71"];

//for(let i = 0; i < planes.length; i++) {
//  console.log(planes[i]);
//}

const bullFrogs = [
  {
    name: "great banjo toad",
    location: "aus",
    isThreatened: false
  },
  {
    name: "american bullfrog",
    location: "usa",
    isThreatened: false
  }
];

for(let i = 0; i < bullFrogs.length; i++) {
  console.log(`${bullFrogs[i].name} is located in ${bullFrogs[i].location}`)
}*/

//------------------------------------------------
//nested loop
/*
const airplanes = [
  ["777", "dc-10", "bombadier"],
  ["learjet", "g6", "gulfstream"]
];

for(let i = 0; i < airplanes.length; i++) {
  let row = airplanes[i];

  for(let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}*/

//------------------------------------------------
/*
//for in, for of loops
let rocks = ["obsidian", "gneiss", "granite", "diamond"];
//in - get index(for objects)
for(let rock in rocks) {
  console.log(rock);
};
//of - get data(good for string and arrays)
for(let rock of rocks) {
  console.log(rock);
};

const rockData = {
  name: "Asbestos ",
  type: "Silicate Minerals",
  colour: "green"
};

//for(let prop of rockData) {
//  console.log(prop);
//}

for(let prop in rockData) {
  console.log(rockData[prop]);
}*/

//------------------------------------------------
//functions
/*
function log() {
  console.log("hi");
}

log();

const logExpression = function() {
  console.log("hello");
};

logExpression.numberOfHellos = 4;

console.log(logExpression);
console.log(logExpression.numberOfHellos);*/

//------------------------------------------------
//functions II
/*
function log(msg) {
  console.log(msg);
}

log("hello");

function turtleString(e) {
  return e;
};

let logValue = turtleString("trtrtr");

console.log(logValue);

function log1(words, isScream) {
  if(isScream === true) {
    return words.toUpperCase();
  } else if (isScream === false) {
    return words.lowerCase();
  } else {
    return words;
  }
}

let log1Value = log1("liverpool", true);

console.log(log1Value);*/
//------------------------------------------------
//scope
/*if(true) {
  //var value = "value";
  let value = "value";
}

console.log(value);

function outer() {
  let outerValue = "outer value";
  console.log(innerValue);

  function inner() {
    let innerValue = "inner value";
    console.log(outerValue);
  }
  inner();
}

outer();*/

//------------------------------------------------
//arrow functions & "this"
//Declaration
/*function add(a, b) {
  return a + b;
}

//Expression
const add1 = function(a, b) {
  return a + b;
}

const add11 = (a, b) => {
  return a + b;
}

const add111 = (a, b) => a + b;

const fastFood = {
  restaurants: ["chipotle", "cookout"],
  type: "fast food",
  foodSummary: function() {
    return this.restaurants.map((restaurant) => {
      return `${restaurant} is a ${this.type} restaurant`
    });
  }
}

console.log(fastFood.foodSummary());*/

//this
/*//var ipAddr = "6.7.5.8"

const util = {
  ipAddr: "8.8.8.8",
  logIdAddr() {
    console.log(this);
    console.log(`IP address: ${this.ipAddr}`)
  }
}

util.logIdAddr();*/

//------------------------------------------------
//higher order func
/*function callBackfunction(func) {
  func();
  func();
  func();
}

function fight() {
  console.log("one, two, one, two");
}

callBackfunction(fight);

function returnFunc() {
  return function () {
    return "!";
  };
}

//console.log(returnFunc()());
let result = returnFunc();
console.log(result());*/

//------------------------------------------------
//hoisting
/*foo();
bar();

//function declaration works
function foo() {
  console.log(5);
}

//function expression to stop hoisting
var bar = function() {
  console.log(19);
}*/

//------------------------------------------------
//forEach
/*let redBulls = ["cranberry", "strawberry", "coconut"];

//for(let i = 0; i < redBulls.length; i++) {
//  console.log(redBulls[i]);
//}

//redBulls.forEach(function(redBull) {
//  console.log(redBull);
//});

let redBullss = [
  {
    colour: "cranberry",
    isEmpty: true
  },
  {
    colour: "coconut",
    isEmpty: true
  },
  {
    colour: "apple",
    isEmpty: false
  }
];

let redBullArr = [];

function throwAwayRedBulls(arr) {
  redBullss.forEach(redBull => {
    if(redBull.isEmpty === true) {
      arr.push(redBull);
    }
  })
  console.log(arr);
  console.log("These red bulls are thrown away");
}

throwAwayRedBulls(redBullArr);*/

//------------------------------------------------
//map - returns a new array
/*let nums = [1, 2, 3];
let doubleNums = [];

//for(let i = 0; i < nums.length; i++) {
//  doubleNums.push(nums[i] * 2);
//}

let doubled = nums.map(num => {
  return num * 2;
});

console.log(nums);
console.log(doubled);

let redBulls = [
  {
    flavour: "cranberry",
    radius: 1,
    height: 4
  },
  {
    flavour: "coconut",
    radius: 1,
    height: 7
  }
];

let redBullVolume = redBulls.map(redbull => {
  return redbull.radius * redbull.height;
})

console.log(redBullVolume);*/

//------------------------------------------------
//rest(set of nums into arr) and spread(arr into set of nums)
//rest
/*const triple = (...nums) => {
  console.log(nums);
  return nums.map(num => num * 3);
}

const result = triple(1, 2, 34, 4, 8);
console.log(result);

//spread
const rats = ["wolf rat", "fancy rat", "norwegian rat"];
const luxuryBadassRats = ["rolex", "tom ford glasses", ...rats];

console.log(luxuryBadassRats);

const turtle = {
  name: "snapping turtle",
  isDangerous: true
};

const turtleClone = {...turtle, location: "ohio"};

console.log(turtleClone);*/

//------------------------------------------------
//destructuring
//const snakes = ["garden snake", "cobra", "rat snake"];

//const [gardenSnake, cobra, ratSnake] = snakes;

//console.log(gardenSnake, cobra, ratSnake);

//object destructuring
//const snake = {
//  name: "rat snake",
//  age: 2,
//  state: "ohio"
//}

//const { name, age, state } = snake;

//console.log(name, age, state);

let file = {
  extension: ".pdf",
  name: "resume",
  size: 100
};

function fileLog({ extension, name, size }) {
  return `the file ${name}${extension} is of size: ${size}`;
}

console.log(fileLog(file));