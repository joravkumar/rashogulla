// First Session

// alert('Hello Pallavi');
var name = "Pallavi";
var age = 29;
var radhaage = Symbol(23);
var pallaviage = Symbol(23);
var no;
var same = null;
var isPallaviOld = false;
var fruits = ["mango"];

var newFunction = function () {
  return "yipee";
};
// Primitive
console.log(typeof name);
console.log(typeof age);
console.log(typeof doubleage);
console.log(typeof no);
console.log(typeof same);
console.log(typeof isPallaviOld);

// Non primitive
console.log(typeof fruits);
console.log(typeof newFunction);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// Second Session

var str = "17";
var convertToNum = +str;
var num = 9;
console.log(convertToNum + num);

const problemForPallavi = 0.1 + 0.2;

console.log(problemForPallavi);

const test = ("ba" + +"a" + "a").toLowerCase();
console.log(test);

// Arrays & Objects

var pallaviDetails = {
  name: "Pallavi",
  age: 23,
  isSingle: true,
  address: "Amritsar",
  test: "Garbage Data",
  personalInfo: {
    hobbies: "Music",
  },
};

var fruits = [
  "mango",
  "apple",
  89,
  {
    personalInfo: {
      hobbies: "Music",
    },
  },
];

console.log(pallaviDetails);
console.log(fruits);
