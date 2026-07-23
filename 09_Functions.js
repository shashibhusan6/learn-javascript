/*
=================================================
        09_Functions.js
        JAVASCRIPT FUNCTIONS
=================================================

WHAT IS A FUNCTION?

A function is a reusable block of code that performs
a specific task.

Instead of writing the same code multiple times,
we write it once inside a function and call it
whenever needed.
*/


// =================================================
// 1. BASIC FUNCTION
// =================================================

function greet() {
    console.log("Hello");
}

// Function call
greet();


// =================================================
// 2. FUNCTION WITH PARAMETERS
// =================================================

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Shashi");


// =================================================
// 3. FUNCTION WITH MULTIPLE PARAMETERS
// =================================================

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// =================================================
// 4. FUNCTION WITH RETURN VALUE
// =================================================

function addition(a, b) {
    return a + b;
}

let result = addition(10, 20);

console.log(result);


// =================================================
// 5. console.log() VS return
// =================================================

/*
console.log()
---------------
It only displays the result.

return
------
It sends the result back to the caller.
*/


function printSum(a, b) {
    console.log(a + b);
}

printSum(5, 10);


function returnSum(a, b) {
    return a + b;
}

let sum = returnSum(5, 10);

console.log(sum);


// =================================================
// 6. FUNCTION WITHOUT PARAMETERS AND RETURN
// =================================================

function getNumber() {
    return 100;
}

let number = getNumber();

console.log(number);


// =================================================
// 7. FUNCTION WITH PARAMETERS BUT WITHOUT RETURN
// =================================================

function multiplyNumbers(a, b) {
    console.log(a * b);
}

multiplyNumbers(5, 4);


// =================================================
// 8. FUNCTION WITH PARAMETERS AND RETURN
// =================================================

function multiply(a, b) {
    return a * b;
}

let multiplicationResult = multiply(5, 4);

console.log(multiplicationResult);


// =================================================
// 9. FUNCTION WITHOUT PARAMETERS BUT WITH RETURN
// =================================================

function getMessage() {
    return "Welcome to JavaScript";
}

let message = getMessage();

console.log(message);


// =================================================
// 10. FUNCTION CAN BE CALLED MULTIPLE TIMES
// =================================================

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(10));


// =================================================
// 11. FUNCTION EXECUTION FLOW
// =================================================

function calculateSquare(number) {
    return number * number;
}

let squareResult = calculateSquare(5);

console.log(squareResult);

/*
Execution:

calculateSquare(5)
        ↓
number = 5
        ↓
5 * 5
        ↓
return 25
        ↓
squareResult = 25
*/


// =================================================
// 12. FUNCTION FOR CHECKING EVEN NUMBER
// =================================================

function checkEven(number) {

    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEven(10));
console.log(checkEven(7));


// =================================================
// 13. FUNCTION TO FIND LARGER NUMBER
// =================================================

function findLarger(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findLarger(10, 20));


// =================================================
// 14. FUNCTION TO CALCULATE FACTORIAL
// =================================================

function factorial(number) {

    let fact = 1;

    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log(factorial(5));


// =================================================
// 15. FUNCTION NAMING
// =================================================

/*
Use meaningful names.

Good:

calculateSum()
findMaximum()
checkEven()
calculateSalary()
findLargestNumber()

Avoid:

x()
abc()
test1()
*/


// =================================================
// IMPORTANT TERMS
// =================================================

/*

FUNCTION
---------
A reusable block of code.

PARAMETER
---------
A variable written inside the function definition.

ARGUMENT
--------
The actual value passed during the function call.

Example:

function add(a, b) {
    return a + b;
}

add(10, 20);

a and b  -> Parameters
10 and 20 -> Arguments


RETURN
------
Sends a value back from the function.

*/


// =================================================
// IMPORTANT RULES
// =================================================

/*

1. A function is created using the function keyword.

2. A function does not execute automatically
   when it is defined.

3. A function executes when it is called.

4. A function can accept parameters.

5. A function can return a value.

6. return stops the execution of a function.

7. Functions allow code reusability.

*/


// =================================================
// BASIC FUNCTION STRUCTURE
// =================================================

/*

function functionName(parameter1, parameter2) {

    // Statements

    return value;
}

let result = functionName(argument1, argument2);

*/


// =================================================
// FINAL EXAMPLE
// =================================================

function calculateTotal(price, quantity) {

    return price * quantity;
}

let total = calculateTotal(100, 3);

console.log("Total Price:", total);


// =================================================
// QUICK REVISION
// =================================================

/*

Function:
    Reusable block of code.

Syntax:

function functionName() {
    // code
}

Call:

functionName();


With Parameters:

function add(a, b) {
    return a + b;
}

add(10, 20);


Important:

console.log() -> Prints the value

return        -> Sends value back

Parameter     -> Variable in function definition

Argument      -> Actual value passed during function call

*/
