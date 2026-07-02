// =========================================
// Operators in JavaScript
// =========================================

// What is an Operator?
// An operator is a symbol that performs an operation on one or more operands.

// Example:
// 10 + 20
// Here,
// +  -> Operator
// 10 and 20 -> Operands

// =========================================
// Types of Operators
// =========================================

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Unary Operators
// 6. Ternary Operator

// =========================================
// 1. Arithmetic Operators
// =========================================

// Used to perform mathematical operations.

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// =========================================
// Increment & Decrement
// =========================================

// Increment (++)

let x = 5;

console.log(++x); // Pre Increment
console.log(x++); // Post Increment
console.log(x);

// Decrement (--)

let y = 5;

console.log(--y); // Pre Decrement
console.log(y--); // Post Decrement
console.log(y);

// =========================================
// 2. Assignment Operators
// =========================================

// Used to assign values to variables.

let num = 10;

num += 5;
console.log(num);

num -= 2;
console.log(num);

num *= 3;
console.log(num);

num /= 2;
console.log(num);

num %= 4;
console.log(num);

// =========================================
// 3. Comparison Operators
// =========================================

// Used to compare two values.
// The result is always true or false.

let p = 10;
let q = "10";

console.log(p == q);   // true
console.log(p === q);  // false
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p < 20);   // true
console.log(p >= 10);  // true
console.log(p <= 9);   // false

// =========================================
// 4. Logical Operators
// =========================================

// && (AND)
// || (OR)
// ! (NOT)

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

// =========================================
// 5. Unary Operators
// =========================================

// Unary operators work on a single operand.

let value = 20;

console.log(+value);
console.log(-value);

// typeof

console.log(typeof value);

// =========================================
// 6. Ternary Operator
// =========================================

// Syntax:
// condition ? trueValue : falseValue

let age = 20;

let result = age >= 18 ? "Eligible to Vote" : "Not Eligible";

console.log(result);

// =========================================
// Interview Notes
// =========================================

// ==  -> Compares only values.
// === -> Compares both value and data type.
//
// Always prefer === and !== in modern JavaScript.

// =========================================
// Summary
// =========================================

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Unary Operators
// Ternary Operator