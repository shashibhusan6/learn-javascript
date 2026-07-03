// =========================================
// Type Conversion in JavaScript
// =========================================

// What is Type Conversion?
// Type Conversion is the process of converting
// a value from one data type to another.

// There are two types of Type Conversion:
// 1. Implicit Type Conversion (Type Coercion)
// 2. Explicit Type Conversion (Type Casting)

// =========================================
// 1. Implicit Type Conversion
// =========================================

// JavaScript automatically converts one data type
// to another when needed.

console.log("10" + 5); // "105"
console.log("10" - 5); // 5
console.log("10" * 5); // 50
console.log("10" / 5); // 2

// Boolean to Number

console.log(true + 1);   // 2
console.log(false + 1);  // 1

// Null

console.log(null + 1);   // 1

// Undefined

console.log(undefined + 1); // NaN

// =========================================
// 2. Explicit Type Conversion (Type Casting)
// =========================================

// We manually convert one data type to another.

// =========================================
// Convert to Number
// =========================================

let strNumber = "100";

console.log(Number(strNumber));
console.log(typeof Number(strNumber));

console.log(Number("123"));
console.log(Number("Hello")); // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0

// =========================================
// Convert to String
// =========================================

let age = 21;

console.log(String(age));
console.log(typeof String(age));

console.log(String(true));
console.log(String(null));

// =========================================
// Convert to Boolean
// =========================================

console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

// =========================================
// parseInt()
// =========================================

// Converts a string to an integer.

console.log(parseInt("100"));
console.log(parseInt("100.99"));
console.log(parseInt("100px"));
console.log(parseInt("Hello")); // NaN

// =========================================
// parseFloat()
// =========================================

// Converts a string to a floating-point number.

console.log(parseFloat("99.99"));
console.log(parseFloat("100.75px"));
console.log(parseFloat("Hello")); // NaN

// =========================================
// Number()
// vs parseInt()
// =========================================

// Number("100px")  -> NaN
// parseInt("100px") -> 100

console.log(Number("100px"));
console.log(parseInt("100px"));

// =========================================
// NaN (Not a Number)
// =========================================

// NaN means the result is not a valid number.

console.log(Number("JavaScript"));
console.log(0 / 0);

// =========================================
// Interview Notes
// =========================================

// Q. What is the difference between
// Type Conversion and Type Casting?

// Type Conversion:
// JavaScript automatically converts data types.

// Type Casting:
// The developer manually converts data types.

// Q. Difference between Number() and parseInt()?

// Number() converts the entire value.
// parseInt() converts only the integer part.

// =========================================
// Summary
// =========================================

// ✔ Implicit Type Conversion
// ✔ Explicit Type Conversion
// ✔ Number()
// ✔ String()
// ✔ Boolean()
// ✔ parseInt()
// ✔ parseFloat()
// ✔ NaN






// =========================================
// JavaScript Practice Questions
// Chapter 05 - Type Conversion
// =========================================

// =========================================
// Theory Questions
// =========================================

// Q1. What is Type Conversion?

// Q2. What are the two types of Type Conversion in JavaScript?

// Q3. What is Implicit Type Conversion (Type Coercion)?

// Q4. What is Explicit Type Conversion (Type Casting)?

// Q5. What is the difference between Type Conversion and Type Casting?

// Q6. What is NaN?

// Q7. What is the difference between Number() and parseInt()?

// =========================================
// Predict the Output
// =========================================

// Q8.
// console.log("10" + 5);

// Q9.
// console.log("10" - 5);

// Q10.
// console.log("10" * 5);

// Q11.
// console.log(true + 1);

// Q12.
// console.log(false + 5);

// Q13.
// console.log(null + 10);

// Q14.
// console.log(undefined + 10);

// =========================================
// Number()
// =========================================

// Q15.
// What is the output?

// console.log(Number("100"));
// console.log(Number("100px"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));

// =========================================
// String()
// =========================================

// Q16.
// Convert the following into String.

// 100
// true
// null

// =========================================
// Boolean()
// =========================================

// Q17.
// Predict the output.

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("JavaScript"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// =========================================
// parseInt() & parseFloat()
// =========================================

// Q18.
// Find the output.

// console.log(parseInt("100"));
// console.log(parseInt("100.99"));
// console.log(parseInt("100px"));
// console.log(parseInt("Hello"));

// Q19.
// Find the output.

// console.log(parseFloat("99.99"));
// console.log(parseFloat("100.75px"));
// console.log(parseFloat("Hello"));

// =========================================
// Coding Questions
// =========================================

// Q20.
// Convert the string "250" into a number and print its data type.

// Q21.
// Convert the number 500 into a string and print its data type.

// Q22.
// Convert the following values into Boolean:
// 0
// 1
// ""
// "Hello"

// Q23.
// Write a program that asks you to store your age as a string
// and convert it into a number.

// Q24.
// Find the difference between:
// Number("100px")
// parseInt("100px")

// =========================================
// Interview Questions
// =========================================

// Q25.
// Why does "10" + 5 return "105"
// but "10" - 5 returns 5?

// Q26.
// Why does typeof Number("100") return "number"?

// Q27.
// What is the output?

// console.log(Number(""));
// console.log(Boolean(" "));

// Q28.
// Explain the difference between:
// null
// undefined
// NaN

// =========================================
// Challenge Questions
// =========================================

// Q29.
// Predict the output.

// console.log("5" + 2 * 3);

// Q30.
// Predict the output.

// console.log(Number(true) + Number(false));