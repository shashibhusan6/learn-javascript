/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. WHAT IS A STRING?
// =================================================

/*
A string is a sequence of characters.

Strings are used to store text.
*/

let name = "Shashi";

console.log(name);


// =================================================
// 2. CREATING A STRING
// =================================================

// Double quotes
let city = "Bhubaneswar";

console.log(city);


// Single quotes
let state = 'Odisha';

console.log(state);


// Backticks
let country = `India`;

console.log(country);


// =================================================
// 3. STRING WITH NUMBERS
// =================================================

let phone = "1234567890";

console.log(phone);


// =================================================
// 4. STRING WITH SPACES
// =================================================

let fullName = "Shashi Bhusan Singha";

console.log(fullName);


// =================================================
// 5. EMPTY STRING
// =================================================

let message = "";

console.log(message);


// =================================================
// 6. STRING WITH SPECIAL CHARACTERS
// =================================================

let text = "Hello World!";

console.log(text);


// =================================================
// 7. CHECKING STRING TYPE
// =================================================

let username = "Shashi";

console.log(typeof username);


// =================================================
// 8. STRING CAN CONTAIN NUMBERS
// =================================================

let age = "21";

console.log(age);

console.log(typeof age);


// =================================================
// 9. NUMBER VS STRING
// =================================================

let number = 21;
let stringNumber = "21";

console.log(number);
console.log(stringNumber);

console.log(typeof number);
console.log(typeof stringNumber);


// =================================================
// 10. STRING CONCATENATION
// =================================================

let firstName = "Shashi";
let lastName = "Singha";

let fullName2 = firstName + " " + lastName;

console.log(fullName2);


// =================================================
// 11. CONCATENATING TEXT
// =================================================

let first = "Hello";
let second = "World";

console.log(first + " " + second);


// =================================================
// 12. STRING WITH A VARIABLE
// =================================================

let studentName = "Rahul";

console.log("My name is " + studentName);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a string variable called `name`
// and store your name.
// Print it.


// Q2. Create a string variable called `city`
// and store your city.
// Print it.


// Q3. Create three string variables:
// firstName
// middleName
// lastName
//
// Print the complete name using +.


// Q4. Create a string variable `country`
// and store "India".
// Print its type using typeof.


// Q5. Create a variable `age`
// and store "21" as a string.
// Print its type.


// Q6. Create a string containing:
// "I am learning JavaScript"
// Print it.


// Q7. Create two strings:
// "Hello"
// "World"
//
// Combine them and print:
// Hello World


// Q8. Create a variable `course`
// with the value "JavaScript".
//
// Print:
// I am learning JavaScript


// Q9. Create variables:
// name = "Shashi"
// age = "21"
//
// Print:
// My name is Shashi and I am 21 years old.


// Q10. Create three variables:
// language = "JavaScript"
// level = "Basic"
// topic = "Strings"
//
// Print all three values.