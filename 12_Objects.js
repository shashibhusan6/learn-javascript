/*
    12_Objects.js
    JAVASCRIPT OBJECTS - BASIC
*/

// =================================================
// WHAT IS AN OBJECT?
// =================================================

/*
An object is used to store related data
in the form of KEY : VALUE pairs.

Example:

student = {
    name: "Shashi",
    age: 21,
    branch: "CSE"
}

Here:
name   -> key
"Shashi" -> value

age    -> key
21     -> value
*/

// =================================================
// 1. CREATING AN OBJECT
// =================================================

let student = {
    name: "Shashi",
    age: 21,
    branch: "CSE"
};

console.log(student);


// =================================================
// 2. ACCESSING OBJECT VALUES
// =================================================

// Using dot (.) notation

console.log(student.name);
console.log(student.age);
console.log(student.branch);


// =================================================
// 3. OBJECT WITH DIFFERENT DATA TYPES
// =================================================

let person = {
    name: "Rahul",
    age: 22,
    isStudent: true
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);


// =================================================
// 4. OBJECT CAN STORE MULTIPLE VALUES
// =================================================

let car = {
    brand: "Toyota",
    model: "Fortuner",
    price: 4000000,
    isAvailable: true
};

console.log(car.brand);
console.log(car.model);
console.log(car.price);
console.log(car.isAvailable);


// =================================================
// PRACTICE QUESTIONS
// =================================================

// Q1. Create an object named `book`.
// Store:
// title: "JavaScript"
// author: "John"
// price: 500
// Print the complete object.


// Q2. Create an object named `mobile`.
// Store:
// brand
// model
// price
// Print the brand and price.


// Q3. Create an object named `student`.
// Store:
// name
// age
// course
// Print the student's name and course.


// Q4. Create an object named `laptop`.
// Store:
// brand: "HP"
// ram: "8GB"
// price: 50000
// Print all three values.


// Q5. Create an object named `employee`.
// Store:
// name
// age
// salary
// Print the employee's name and salary.