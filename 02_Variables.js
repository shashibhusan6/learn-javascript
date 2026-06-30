// =========================================
// Variables in JavaScript
// =========================================

// What is a Variable?
// A variable is a named container used to store data.
// The value stored in a variable can change during program execution.

// =========================================
// Ways to Declare Variables
// =========================================

// 1. var
// 2. let
// 3. const

// =========================================
// var
// =========================================

// var was the only way to declare variables before ES6 (2015).
// It can be reassigned and redeclared.
// It has function scope.

var name = "Shashi";
console.log(name);

name = "Rahul";
console.log(name);

var name = "Aman";
console.log(name);

// =========================================
// let
// =========================================

// Introduced in ES6.
// It can be reassigned but cannot be redeclared in the same scope.
// It has block scope.

let age = 21;
console.log(age);

age = 22;
console.log(age);

// let age = 23; // Error

// =========================================
// const
// =========================================

// Introduced in ES6.
// It cannot be reassigned or redeclared.
// A value must be assigned during declaration.
// It has block scope.

const country = "India";
console.log(country);

// country = "USA"; // Error

// =========================================
// Variable Naming Rules
// =========================================

// ✔ Can contain letters, numbers, _ and $
// ✔ Cannot start with a number
// ✔ Cannot use reserved keywords
// ✔ Variable names are case-sensitive

let firstName = "Shashi";
let _age = 21;
let $salary = 5000;

// Invalid Examples
// let 1name = "John";
// let let = 10;

// =========================================
// Best Practices
// =========================================

// ✔ Use meaningful names.
// ✔ Prefer const by default.
// ✔ Use let when the value will change.
// ✔ Avoid var in modern JavaScript.

// =========================================
// Example
// =========================================

let city = "Bhubaneswar";
let pincode = 751001;

console.log(city);
console.log(pincode);