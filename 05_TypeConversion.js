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