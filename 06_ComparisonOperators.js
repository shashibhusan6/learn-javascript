// =========================================
// Comparison Operators in JavaScript
// =========================================

// What is a Comparison Operator?
// Comparison operators are used to compare two values.
// The result of every comparison is either:
// true or false (Boolean).

// Example:
// 10 > 5  -> true
// 10 < 5  -> false

// =========================================
// Types of Comparison Operators
// =========================================

// ==   Equal to
// ===  Strict Equal to
// !=   Not Equal to
// !==  Strict Not Equal to
// >    Greater Than
// <    Less Than
// >=   Greater Than or Equal to
// <=   Less Than or Equal to

// =========================================
// Equal To (==)
// =========================================

// Compares only the values.
// It automatically converts data types if needed.

let a = 10;
let b = "10";

console.log(a == b); // true

// Explanation:
// "10" (string) is converted into 10 (number).

// =========================================
// Strict Equal To (===)
// =========================================

// Compares both value and data type.
// No automatic type conversion.

console.log(a === b); // false

// Explanation:
// Value is same.
// Data types are different.

// =========================================
// Not Equal To (!=)
// =========================================

// Returns true if values are different.

console.log(10 != 20); // true
console.log(10 != "10"); // false

// =========================================
// Strict Not Equal To (!==)
// =========================================

// Checks both value and data type.

console.log(10 !== "10"); // true
console.log(10 !== 10);   // false

// =========================================
// Greater Than (>)
// =========================================

console.log(20 > 10); // true
console.log(10 > 20); // false

// =========================================
// Less Than (<)
// =========================================

console.log(5 < 10); // true
console.log(20 < 10); // false

// =========================================
// Greater Than or Equal To (>=)
// =========================================

console.log(10 >= 10); // true
console.log(15 >= 10); // true
console.log(5 >= 10);  // false

// =========================================
// Less Than or Equal To (<=)
// =========================================

console.log(10 <= 10); // true
console.log(5 <= 10);  // true
console.log(20 <= 10); // false

// =========================================
// String Comparison
// =========================================

// Strings are compared alphabetically (Unicode values).

console.log("apple" < "banana"); // true
console.log("cat" > "bat");      // true
console.log("A" < "a");          // true

// =========================================
// Boolean Comparison
// =========================================

// true is treated as 1
// false is treated as 0

console.log(true == 1);  // true
console.log(false == 0); // true

// =========================================
// Null and Undefined
// =========================================

console.log(null == undefined);   // true
console.log(null === undefined);  // false

// =========================================
// Common Mistakes
// =========================================

// Avoid using == whenever possible.

// Example

console.log(0 == false);   // true
console.log("" == false);  // true
console.log("0" == false); // true

// These results may be confusing.

// Always prefer === and !==.

// =========================================
// Real-Life Example
// =========================================

let age = 18;

console.log(age >= 18); // Eligible to vote

let password = "admin123";

console.log(password === "admin123");

// =========================================
// Interview Notes
// =========================================

// Q. Difference between == and ===?

// ==
// • Compares only values.
// • Performs automatic type conversion.

// ===
// • Compares value and data type.
// • No type conversion.
// • Recommended in modern JavaScript.

// =========================================
// Quick Revision
// =========================================

// ==   Equal To
// ===  Strict Equal To
// !=   Not Equal To
// !==  Strict Not Equal To
// >    Greater Than
// <    Less Than
// >=   Greater Than or Equal To
// <=   Less Than or Equal To

// =========================================
// Summary
// =========================================

// ✔ Comparison operators return true or false.
// ✔ Prefer === instead of ==.
// ✔ Prefer !== instead of !=.
// ✔ Strings are compared alphabetically.
// ✔ true behaves like 1.
// ✔ false behaves like 0.