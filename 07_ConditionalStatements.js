 // =========================================================
// Conditional Statements in JavaScript
// =========================================================

// What are Conditional Statements?
// Conditional statements allow a program to make decisions.
// They execute different blocks of code based on whether a
// condition is true or false.

// Example:
// If age is greater than or equal to 18,
// then the person can vote.

// =========================================================
// Types of Conditional Statements
// =========================================================

// 1. if
// 2. if...else
// 3. else if Ladder
// 4. Nested if
// 5. switch Statement
// 6. Ternary Operator

// =========================================================
// 1. if Statement
// =========================================================

// Syntax

/*
if(condition){
    // code
}
*/

let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
}

// =========================================================
// 2. if...else Statement
// =========================================================

// Executes one block if the condition is true,
// otherwise executes another block.

/*

if(condition){
    // code
}
else{
    // code
}

*/

let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// =========================================================
// 3. else if Ladder
// =========================================================

// Used when multiple conditions need to be checked.

let score = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else if (score >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// =========================================================
// 4. Nested if
// =========================================================

// An if statement inside another if statement.

let userAge = 22;
let hasLicense = true;

if (userAge >= 18) {

    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("Get a driving license first.");
    }

} else {
    console.log("You are underage.");
}

// =========================================================
// 5. switch Statement
// =========================================================

// Used when comparing one value against many options.

// Syntax

/*
switch(expression){

    case value1:
        code;
        break;

    case value2:
        code;
        break;

    default:
        code;
}
*/

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// =========================================================
// 6. Ternary Operator
// =========================================================

// A shorthand for if...else.

// Syntax

// condition ? trueStatement : falseStatement;

let number = 15;

let result = number % 2 === 0
    ? "Even Number"
    : "Odd Number";

console.log(result);

// =========================================================
// Truthy and Falsy Values
// =========================================================

// Falsy Values

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy Values

console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));
console.log(Boolean({}));

// =========================================================
// Common Mistakes
// =========================================================

// Wrong

// if(age = 18)

// Correct

// if(age === 18)

// Always use === for comparison.

// =========================================================
// Real-Life Example
// =========================================================

let balance = 1000;
let withdraw = 500;

if (withdraw <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

// =========================================================
// Interview Notes
// =========================================================

// Q. Difference between if and switch?

// if
// ✔ Better for ranges and conditions.
// ✔ Can use logical operators.

// switch
// ✔ Better when checking one variable
// against many fixed values.

// =========================================================
// Quick Revision
// =========================================================

// ✔ if
// ✔ if...else
// ✔ else if
// ✔ Nested if
// ✔ switch
// ✔ Ternary Operator
// ✔ Truthy Values
// ✔ Falsy Values

// =========================================================
// Summary
// =========================================================

// Conditional Statements help a program
// make decisions based on conditions.