/*
=========================================
Chapter 10 - Scope
=========================================

What is Scope?
--------------
- Scope determines where a variable can be accessed.
- It controls the visibility of variables.
- A variable is only available inside the scope where it is declared.

JavaScript has 3 types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

-----------------------------------------
1. Global Scope
-----------------------------------------

- Variables declared outside all functions and blocks.
- Can be accessed from anywhere in the program.

Example:

let name = "Shashi";

function greet() {
    console.log(name);
}

greet();
console.log(name);

Output:
Shashi
Shashi

-----------------------------------------
2. Function Scope
-----------------------------------------

- Variables declared inside a function.
- Accessible only within that function.

Example:

function test() {
    let age = 21;
    console.log(age);
}

test();

// console.log(age); // Error

Output:
21

-----------------------------------------
3. Block Scope
-----------------------------------------

- Variables declared using let and const
  inside {} are only accessible within that block.

Example:

if (true) {
    let city = "Bhubaneswar";
    console.log(city);
}

// console.log(city); // Error

Output:
Bhubaneswar

-----------------------------------------
var vs let vs const
-----------------------------------------

var
- Function scoped
- Can be redeclared
- Can be reassigned

let
- Block scoped
- Cannot be redeclared in the same scope
- Can be reassigned

const
- Block scoped
- Cannot be redeclared
- Cannot be reassigned

Example:

var a = 10;
var a = 20; // Allowed

let b = 10;
// let b = 20; // Error

const c = 30;
// c = 40; // Error

-----------------------------------------
Shadowing
-----------------------------------------

A variable inside a smaller scope can have
the same name as a variable outside.

Example:

let x = 10;

{
    let x = 20;
    console.log(x);
}

console.log(x);

Output:
20
10

-----------------------------------------
Scope Chain
-----------------------------------------

JavaScript first looks for a variable
in the current scope.

If not found,
it looks in the parent scope.

If still not found,
it continues until the global scope.

Example:

let country = "India";

function outer() {

    function inner() {
        console.log(country);
    }

    inner();
}

outer();

Output:
India

-----------------------------------------
Interview Notes
-----------------------------------------

✔ Scope controls variable accessibility.

✔ Global variables can be accessed anywhere.

✔ Function-scoped variables exist only inside the function.

✔ let and const are block scoped.

✔ var is function scoped.

✔ Prefer let and const over var.

✔ JavaScript follows lexical (static) scope.

✔ JavaScript searches variables from the current scope to the outer scope (scope chain).

*/





/*
=========================================
10_Scope_Practice.js
JavaScript Scope - Practice Questions
=========================================

Instructions:
- Solve each question yourself.
- Predict the output before running the code.
- Focus on understanding variable scope.
*/

//////////////////////////////////////////////////
// Easy (1-10)
//////////////////////////////////////////////////

// Question 1
// Create a global variable named company.
// Print it inside a function.

// Question 2
// Create a variable inside a function.
// Try printing it outside the function.
// What happens?

// Question 3
// Declare a variable using let inside an if block.
// Print it inside the block.

// Question 4
// Declare a variable using let inside an if block.
// Try printing it outside the block.

// Question 5
// Create a global variable score = 100.
// Print it from two different functions.

// Question 6
// Create two functions.
// Each function should have its own variable named count.
// Print both values.

// Question 7
// Declare a variable using const inside a block.
// Print it inside the block.

// Question 8
// Create a function that declares a local variable age.
// Return the value instead of printing it.

// Question 9
// Predict the output.

let city = "Delhi";

function display() {
    console.log(city);
}

display();

// Question 10
// Predict the output.

{
    let x = 50;
    console.log(x);
}

//////////////////////////////////////////////////
// Medium (11-20)
//////////////////////////////////////////////////

// Question 11
// Predict the output.

let a = 10;

function test() {
    let a = 20;
    console.log(a);
}

test();
console.log(a);

// Question 12
// Predict the output.

let name = "John";

function greet() {
    console.log(name);
}

greet();

// Question 13
// Predict the output.

function demo() {
    let number = 5;

    if (true) {
        console.log(number);
    }
}

demo();

// Question 14
// Predict the output.

if (true) {
    let language = "JavaScript";
}

// console.log(language);

// Question 15
// Create two nested blocks.
// Declare a variable in the outer block.
// Access it from the inner block.

// Question 16
// Create a function inside another function.
// Access the outer function's variable.

// Question 17
// Predict the output.

let x = 100;

function one() {
    console.log(x);
}

one();

// Question 18
// Create three nested functions.
// Print a global variable from the innermost function.

// Question 19
// Write a program demonstrating variable shadowing.

// Question 20
// Explain why the following code gives an error.

function test() {
    let age = 22;
}

// console.log(age);

//////////////////////////////////////////////////
// Hard (21-30)
//////////////////////////////////////////////////

// Question 21
// Predict the output.

let x = 10;

function outer() {
    let x = 20;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();

// Question 22
// Predict the output.

let value = 1;

{
    let value = 2;

    {
        let value = 3;
        console.log(value);
    }

    console.log(value);
}

console.log(value);

// Question 23
// Predict the output.

let a = 5;

function first() {

    let a = 10;

    function second() {
        console.log(a);
    }

    second();
}

first();

// Question 24
// Predict the output.

let message = "Hello";

function one() {

    function two() {
        console.log(message);
    }

    two();
}

one();

// Question 25
// Predict the output.

let num = 100;

function test() {

    if (true) {
        let num = 200;
        console.log(num);
    }

    console.log(num);
}

test();

// Question 26
// Create three nested blocks.
// Declare variables in each block.
// Print all accessible variables from the innermost block.

// Question 27
// Explain how JavaScript searches for variables using the Scope Chain.

// Question 28
// Create an example where a local variable shadows a global variable.

// Question 29
// Create a function that contains another function.
// Demonstrate that the inner function can access the outer function's variable
// but the outer function cannot access the inner function's variable.

// Question 30
// Without running the code,
// explain the output.

let country = "India";

function state() {
    let stateName = "Odisha";

    function city() {
        let cityName = "Bhubaneswar";

        console.log(country);
        console.log(stateName);
        console.log(cityName);
    }

    city();
}

state();