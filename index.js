// First Session
// debugger;

// alert('Hello Pallavi');
var name = "Pallavi";
var age = 29;
var radhaage = Symbol(23);
var pallaviage = Symbol(23);
var no;
var same = null;
var isPallaviOld = false;
var fruits = ["mango"];
// console.log(newFunction())

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
  // return of User Object
}

console.log(makeObjectOfUser());
handleButton();

setTimeout(function () {
  console.log("Pallavis' set time out function");
}, 1000);
// Task to stop Set Interval after 5 second
// setInterval( function() {
//   console.log("Pallavis' set Interval function");
// }, 1000);

// debugger;
function handleButton() {
  var testVariableHoist = "Jaanu";
  {
    const testVariableSecond = "Boo";
    {
      const boombaam = "pal";
    }
  }
  console.log("Button Clicked");
}

// Task: eventlistener on hover

function saveForm(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const single = document.getElementById("single").checked;
  console.log(single);
  const isSingle = single ? true : false;
  showFormValues(username, isSingle);
}

function showFormValues(name, isSingle) {
  const container = document.getElementById("print-form");
  container.innerHTML = `<div>Username: ${name}</div><div>${
    isSingle ? "Single" : "Not Single"
  }</div>`;
}
