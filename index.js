// First Session
// debugger;

// alert('Hello John Doe');
var name = "John Doe";
var age = 29;
var radhaage = Symbol(23);
var userage = Symbol(23);
var no;
var same = null;
var isUserOld = false;
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
console.log(typeof isUserOld);

// Non primitive
console.log(typeof fruits);
console.log(typeof newFunction);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// Second Session

var str = "17";
var convertToNum = +str;
var num = 9;
console.log(convertToNum + num);

const problemForUser = 0.1 + 0.2;

console.log(problemForUser);

const test = ("ba" + +"a" + "a").toLowerCase();
console.log(test);

// Arrays & Objects

var userDetails = {
  name: "user",
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

console.log(userDetails);
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

// Task

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
handleButton();

setTimeout(function () {
  console.log("set time out function");
}, 1000);
// Task to stop Set Interval after 5 second
<<<<<<< HEAD
var myInterval = setInterval(function() {
  console.log("Pallavis' set Interval function");
}, 5000);
clearInterval(myInterval);
=======
// setInterval( function() {
//   console.log("set Interval function");
// }, 1000);

>>>>>>> 4385f8799d2bd722854bedebeb2130f2e83c7d87
// debugger;
function handleButton() {
  var testVariableHoist = "John Doe";
  {
    const testVariableSecond = "Boo";
    {
      const boombaam = "pal";
    }
  }
  console.log("Button Clicked");
}

function isFormValid(name, age, dob, address, hobbies, isSingle) {
  var errors = {};
  if (name === "") errors.hasNameError = true;
  if (age === "") errors.hasAgeError = true;
  if (dob === "") errors.hasDobError = true;
  if (address === "") errors.hasAddressError = true;
  if (hobbies === "") errors.hashobbiesError = true;
  console.log(errors);

  return errors;
}

// Task: eventlistener on hover

// document.getElementById("user-form").addEventListener("submit", saveForm);

function saveForm(e) {
  debugger;
  console.log(e);
  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value;
  const hobbies = document.getElementById("hobbies").value;
  const single = document.getElementById("single").checked;
  const isSingle = single ? "Single" : "Not Single";
  const usernameError = document.getElementById("username-error");
  const ageError = document.getElementById("age-error");
  const dobError = document.getElementById("dob-error");
  const addressError = document.getElementById("address-error");
  const hobbiesError = document.getElementById("hobbies-error");
  const formValidation = isFormValid(
    username,
    age,
    dob,
    address,
    hobbies,
    isSingle
  );
  usernameError.innerText = "";
  ageError.innerText = "";
  dobError.innerText = "";
  addressError.innerText = "";
  hobbiesError.innerText = "";
  if (Object.keys(formValidation).length === 0) {
    showFormValues(username, age, dob, address, hobbies, isSingle);
  } else {
    if (formValidation.hasNameError)
      usernameError.innerText = `username is required`;
    if (formValidation.hasAgeError) ageError.innerText = `age is required`;
    if (formValidation.hasDobError) dobError.innerText = `dob is required`;
    if (formValidation.hasAddressError)
      addressError.innerText = `address is required`;
    if (formValidation.hashobbiesError)
      hobbiesError.innerText = `hobbies is required`;
  }
}

function showFormValues(name, age, dob, address, hobbies, isSingle) {
  const container = document.getElementById("print-form");
  container.innerHTML = `<div>Username: ${name}</div>
  <div>Age: ${age}</div>
  <div>Date of Birth: ${dob}</div>
  <div>Address: ${address}</div>
  <div>hobbies: ${hobbies}</div>
  <div>Status: ${isSingle}</div>
  `;
}

// Task
function saveForm() {}
