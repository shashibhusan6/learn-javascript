/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. replace()
// =================================================

/*
replace(oldValue, newValue)

Replaces the first matching value.
*/

let text = "I like JavaScript";

console.log(text.replace("JavaScript", "Java"));


// =================================================
// 2. replace() WITH A CHARACTER
// =================================================

let word = "banana";

console.log(word.replace("a", "o"));


// =================================================
// 3. replace() ONLY REPLACES FIRST MATCH
// =================================================

let word2 = "banana";

console.log(word2.replace("a", "o"));

/*
Only the first "a" is replaced.
*/


// =================================================
// 4. replaceAll()
// =================================================

/*
replaceAll(oldValue, newValue)

Replaces all matching values.
*/

let word3 = "banana";

console.log(word3.replaceAll("a", "o"));


// =================================================
// 5. replaceAll() WITH A WORD
// =================================================

let sentence = "I like JavaScript. JavaScript is easy.";

console.log(
    sentence.replaceAll("JavaScript", "Python")
);


// =================================================
// 6. replace() DOES NOT CHANGE ORIGINAL STRING
// =================================================

let language = "JavaScript";

let newLanguage = language.replace("JavaScript", "Java");

console.log(language);
console.log(newLanguage);


// =================================================
// 7. split()
// =================================================

/*
split() breaks a string into an array.
*/

let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));


// =================================================
// 8. split() WITH SPACE
// =================================================

let fullName = "Shashi Bhusan Singha";

console.log(fullName.split(" "));


// =================================================
// 9. split() WITH EACH CHARACTER
// =================================================

let name = "Shashi";

console.log(name.split(""));


// =================================================
// 10. split() WITH A WORD
// =================================================

let sentence2 = "JavaScript is easy";

console.log(sentence2.split(" "));


// =================================================
// 11. SPLIT AND ACCESS ARRAY ELEMENT
// =================================================

let colors = "Red,Green,Blue";

let colorArray = colors.split(",");

console.log(colorArray);

console.log(colorArray[0]);
console.log(colorArray[1]);
console.log(colorArray[2]);


// =================================================
// 12. STRING TO ARRAY
// =================================================

let numbers = "10,20,30,40";

let numberArray = numbers.split(",");

console.log(numberArray);


// =================================================
// 13. REPLACE + SPLIT
// =================================================

let data = "JavaScript,Java,Python";

let updatedData = data.replace("Java", "C++");

console.log(updatedData);

console.log(updatedData.split(","));


// =================================================
// 14. TRIM + REPLACE
// =================================================

let input = "   Hello World   ";

input = input.trim();

console.log(input.replace("World", "JavaScript"));


// =================================================
// 15. LOWERCASE + REPLACE
// =================================================

let message = "I LIKE JAVASCRIPT";

message = message.toLowerCase();

console.log(message.replace("javascript", "java"));


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create:
// "I like JavaScript"
//
// Replace "JavaScript" with "Java".


// Q2. Create:
// "I love JavaScript"
//
// Replace "JavaScript" with "Python".


// Q3. Create:
// "banana"
//
// Replace the first "a" with "o".


// Q4. Create:
// "banana"
//
// Replace all "a" with "o".


// Q5. Create:
// "JavaScript JavaScript JavaScript"
//
// Replace all "JavaScript" with "Python".


// Q6. Create:
// "Apple,Banana,Mango"
//
// Convert it into an array using split().


// Q7. Create:
// "Red Green Blue"
//
// Convert it into an array.


// Q8. Create:
// "Shashi Bhusan Singha"
//
// Split it into separate words.


// Q9. Create:
// "JavaScript"
//
// Split every character into an array.


// Q10. Create:
// "10,20,30,40,50"
//
// Convert it into an array.


// Q11. Create:
// "HTML,CSS,JavaScript"
//
// Convert it into an array.
// Print the second element.


// Q12. Create:
// "I am learning JavaScript"
//
// Split it into separate words.
// Print the first word.


// Q13. Create:
// "I like Java. Java is easy."
//
// Replace all "Java" with "JavaScript".


// Q14. Create:
// "   I like JavaScript   "
//
// Remove the extra spaces.
// Then replace "JavaScript" with "Python".


// Q15. Create:
// "apple-orange-banana"
//
// Split the string using "-".
// Print the resulting array.


/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. CONCATENATION USING +
// =================================================

let firstName = "Shashi";
let lastName = "Singha";

let fullName = firstName + " " + lastName;

console.log(fullName);


// =================================================
// 2. CONCATENATING MULTIPLE STRINGS
// =================================================

let first = "Hello";
let second = "World";
let third = "JavaScript";

console.log(first + " " + second + " " + third);


// =================================================
// 3. CONCATENATING STRING + NUMBER
// =================================================

let name = "Shashi";
let age = 21;

console.log(name + " is " + age + " years old.");


// =================================================
// 4. concat()
// =================================================

/*
concat() joins strings together.
*/

let greeting = "Hello";

let result = greeting.concat(" ", "World");

console.log(result);


// =================================================
// 5. concat() WITH VARIABLES
// =================================================

let city = "Bhubaneswar";
let state = "Odisha";

let location = city.concat(", ", state);

console.log(location);


// =================================================
// 6. CONCATENATING MULTIPLE VALUES
// =================================================

let a = "JavaScript";
let b = "is";
let c = "easy";

let sentence = a.concat(" ", b, " ", c);

console.log(sentence);


// =================================================
// 7. TEMPLATE LITERAL
// =================================================

/*
Template literals use backticks ` `.

Variables can be inserted using:
${variable}
*/

let studentName = "Shashi";
let studentAge = 21;

console.log(`My name is ${studentName}.`);

console.log(`I am ${studentAge} years old.`);


// =================================================
// 8. MULTIPLE VARIABLES IN TEMPLATE LITERAL
// =================================================

let student = "Rahul";
let course = "JavaScript";

console.log(`My name is ${student} and I am learning ${course}.`);


// =================================================
// 9. EXPRESSIONS IN TEMPLATE LITERALS
// =================================================

let x = 10;
let y = 20;

console.log(`Sum = ${x + y}`);


// =================================================
// 10. TEMPLATE LITERAL WITH OBJECT DATA
// =================================================

let person = {
    name: "Amit",
    age: 22
};

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);


// =================================================
// 11. TEMPLATE LITERAL WITH STRING METHODS
// =================================================

let username = "shashi";

console.log(`Name: ${username.toUpperCase()}`);


// =================================================
// 12. MULTI-LINE STRING
// =================================================

let message = `
Hello Shashi,
Welcome to JavaScript.
Keep practicing.
`;

console.log(message);


// =================================================
// 13. + VS concat()
// =================================================

let language = "JavaScript";
let level = "Basic";

console.log(language + " " + level);

console.log(language.concat(" ", level));


// =================================================
// 14. TEMPLATE LITERAL
// =================================================

console.log(`${language} ${level}`);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create:
// firstName = "Shashi"
// lastName = "Singha"
//
// Combine them using +.
// Print the full name.


// Q2. Create:
// firstName = "Rahul"
// lastName = "Kumar"
//
// Combine them using concat().


// Q3. Create:
// name = "Amit"
// age = 22
//
// Print:
// My name is Amit and I am 22 years old.
//
// Use +.


// Q4. Create:
// city = "Bhubaneswar"
// state = "Odisha"
//
// Combine them using concat().
// Expected:
// Bhubaneswar, Odisha


// Q5. Create:
// name = "Shashi"
// course = "JavaScript"
//
// Use template literals to print:
// Shashi is learning JavaScript.


// Q6. Create:
// product = "Laptop"
// price = 50000
//
// Use template literals to print:
// Laptop costs 50000.


/*
Q7. Create:

firstName = "Shashi"
lastName = "Singha"
age = 21

Use a template literal to print:

My name is Shashi Singha and I am 21 years old.
*/


// Q8. Create:
// x = 20
// y = 30
//
// Use a template literal to print:
// Sum = 50


// Q9. Create an object:
//
// student = {
//     name: "Shashi",
//     branch: "CSE"
// }
//
// Use a template literal to print:
// Shashi is a CSE student.


// Q10. Create:
//
// name = "javascript"
// level = "basic"
//
// Use a template literal and toUpperCase()
// to print:
//
// JAVASCRIPT - BASIC


/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. VARIABLE INSIDE TEMPLATE LITERAL
// =================================================

let name = "Shashi";

console.log(`My name is ${name}`);


// =================================================
// 2. MULTIPLE VARIABLES
// =================================================

let firstName = "Shashi";
let age = 21;
let branch = "CSE";

console.log(
    `My name is ${firstName}, I am ${age} years old and I study ${branch}.`
);


// =================================================
// 3. EXPRESSIONS INSIDE ${}
// =================================================

let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);

console.log(`Difference = ${b - a}`);

console.log(`Product = ${a * b}`);


// =================================================
// 4. VARIABLE + STRING USING +
// =================================================

let city = "Bhubaneswar";
let state = "Odisha";

console.log("I live in " + city + ", " + state);


// =================================================
// 5. THE SAME USING TEMPLATE LITERAL
// =================================================

console.log(`I live in ${city}, ${state}`);


// =================================================
// 6. STRING METHOD INSIDE TEMPLATE LITERAL
// =================================================

let username = "shashi";

console.log(`Username: ${username.toUpperCase()}`);


// =================================================
// 7. trim() + TEMPLATE LITERAL
// =================================================

let userInput = "   Shashi   ";

console.log(`Hello ${userInput.trim()}`);


// =================================================
// 8. toLowerCase() + TEMPLATE LITERAL
// =================================================

let language = "JAVASCRIPT";

console.log(`Learning ${language.toLowerCase()}`);


// =================================================
// 9. OBJECT PROPERTY + TEMPLATE LITERAL
// =================================================

let student = {
    name: "Rahul",
    age: 22,
    branch: "CSE"
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Branch: ${student.branch}`);


// =================================================
// 10. ARRAY VALUE + TEMPLATE LITERAL
// =================================================

let fruits = ["Apple", "Banana", "Mango"];

console.log(`First fruit: ${fruits[0]}`);
console.log(`Second fruit: ${fruits[1]}`);


// =================================================
// 11. CALCULATION WITH VARIABLES
// =================================================

let price = 50000;
let quantity = 2;

let total = price * quantity;

console.log(`Total price = ${total}`);


// =================================================
// 12. DISCOUNT CALCULATION
// =================================================

let productPrice = 1000;
let discount = 100;

let finalPrice = productPrice - discount;

console.log(`Final price = ${finalPrice}`);


// =================================================
// 13. CONDITIONAL MESSAGE
// =================================================

let marks = 85;

if (marks >= 40) {
    console.log(`Marks: ${marks} - Pass`);
} else {
    console.log(`Marks: ${marks} - Fail`);
}


// =================================================
// 14. TEMPLATE LITERAL WITH TERNARY
// =================================================

let age2 = 21;

let result = age2 >= 18 ? "Adult" : "Minor";

console.log(`Age: ${age2} - ${result}`);


// =================================================
// 15. DYNAMIC MESSAGE
// =================================================

let product = "Laptop";
let productPrice2 = 50000;

console.log(
    `The ${product} costs ₹${productPrice2}.`
);


// =================================================
// 16. TEMPLATE LITERAL WITH METHOD
// =================================================

let course = "javascript";

console.log(
    `Course: ${course.toUpperCase()}`
);


// =================================================
// 17. MULTIPLE EXPRESSIONS
// =================================================

let x = 10;
let y = 5;

console.log(
    `Sum: ${x + y}, Difference: ${x - y}, Product: ${x * y}`
);


// =================================================
// 18. MULTI-LINE TEMPLATE STRING
// =================================================

let studentName = "Shashi";
let studentCourse = "JavaScript";

let message = `
Student Name: ${studentName}
Course: ${studentCourse}
`;

console.log(message);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create:
// name = "Shashi"
// age = 21
//
// Use a template literal to print:
// My name is Shashi and I am 21 years old.


// Q2. Create:
// city = "Bhubaneswar"
// state = "Odisha"
//
// Print:
// I live in Bhubaneswar, Odisha.


// Q3. Create:
// a = 20
// b = 10
//
// Print using a template literal:
// Sum = 30
// Difference = 10
// Product = 200


// Q4. Create:
// name = "shashi"
//
// Use toUpperCase() inside a template literal.
// Expected:
// SHASHI


// Q5. Create:
// name = "   Shashi   "
//
// Use trim() inside a template literal.
// Expected:
// Shashi


// Q6. Create:
// language = "JAVASCRIPT"
//
// Convert it to lowercase inside
// a template literal.


// Q7. Create an object:
//
// student = {
//     name: "Shashi",
//     age: 21,
//     branch: "CSE"
// }
//
// Print all values using template literals.


// Q8. Create:
//
// price = 500
// quantity = 3
//
// Calculate total and print:
//
// Total = 1500


// Q9. Create:
//
// marks = 75
//
// Use if-else and template literal.
//
// Expected:
// Marks: 75 - Pass


// Q10. Create:
//
// product = "Laptop"
// price = 50000
//
// Print:
//
// The Laptop costs ₹50000.