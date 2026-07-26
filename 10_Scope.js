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



