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

// Functions

function printMyName() {
  console.log("Jorav");
  return "Jorav";
}

printMyName();

function convertToNumber(arg) {
  return Number(arg);
}

function sumOfTwoNumbers(var1, var2) {
  var1 = convertToNumber(var1);
  var2 = convertToNumber(var2);
  return var1 + var2;
} 
console.log(sumOfTwoNumbers("10", 5));
console.log(sumOfTwoNumbers(2, 6));
console.log(sumOfTwoNumbers(2, 7));

// Task for Pallavi

function makeObjectOfUser(name, age, address, dob, hobbies, isSingle) {
  var Pallobj = {
    name:  name,
    age: 23,
    address: "Amritsar",
    dob : "22.06.1997",
    hobbies: "Music",
    isSingle : true,
  };
  // Return it
  return Pallobj;
  // return of User Object
}

console.log(makeObjectOfUser());

setTimeout(function () {
  console.log("Pallavis' set time out function");
}, 1000);
// Task to stop Set Interval after 5 second
var myInterval = setInterval(function() {
  console.log("Pallavis' set Interval function");
}, 5000);
clearInterval(myInterval);
// debugger;
function handleButton() {
  console.log("Button Clicked");
}
var btn = document.getElementById('pallavi-btn');

btn.addEventListener("click", handleButton);

// Task: eventlistener on hover 
