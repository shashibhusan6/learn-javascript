// =========================================
// Data Types in JavaScript
// =========================================

// What is a Data Type?
// A data type defines the kind of value a variable can store.
//
// JavaScript is a dynamically typed language,
// which means you don't need to specify the data type explicitly.
// JavaScript automatically determines the data type.

// =========================================
// Types of Data
// =========================================

// JavaScript has two categories of data types:
//
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types

// =========================================
// Primitive Data Types
// =========================================

// JavaScript has 7 Primitive Data Types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// =========================================
// 1. String
// =========================================

// A String represents textual data.

let firstName = "Shashi";
let lastName = 'Singha';

console.log(firstName);
console.log(lastName);
console.log(typeof firstName);

// =========================================
// 2. Number
// =========================================

// Number represents both integers and decimal values.

let age = 21;
let price = 99.99;

console.log(age);
console.log(price);
console.log(typeof age);

// =========================================
// 3. Boolean
// =========================================

// Boolean has only two values:
// true or false.

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);
console.log(typeof isStudent);

// =========================================
// 4. Undefined
// =========================================

// A variable declared but not assigned any value
// has the value undefined.

let city;

console.log(city);
console.log(typeof city);

// =========================================
// 5. Null
// =========================================

// Null represents an intentional absence of value.

let phone = null;

console.log(phone);

// Note:
// typeof null returns "object"
// This is a known bug in JavaScript.

console.log(typeof phone);

// =========================================
// 6. BigInt
// =========================================

// BigInt is used to store very large integers.

let bigNumber = 1234567890123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);

// =========================================
// 7. Symbol
// =========================================

// Symbol creates a unique value.

let id = Symbol("id");

console.log(id);
console.log(typeof id);

// =========================================
// Non-Primitive Data Types
// =========================================

// Non-primitive data types store collections of values.

// Object

let student = {
    name: "Shashi",
    age: 21
};

console.log(student);
console.log(typeof student);

// Array

let colors = ["Red", "Green", "Blue"];

console.log(colors);
console.log(typeof colors);

// Function

function greet() {
    console.log("Hello");
}

greet();
console.log(typeof greet);

// =========================================
// Summary
// =========================================

// Primitive Data Types
// ✔ String
// ✔ Number
// ✔ Boolean
// ✔ Undefined
// ✔ Null
// ✔ BigInt
// ✔ Symbol

// Non-Primitive Data Types
// ✔ Object
// ✔ Array
// ✔ Function