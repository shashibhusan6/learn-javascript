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




/*
    12_Objects.js
    JAVASCRIPT OBJECTS - BASIC
*/

// =================================================
// 1. UPDATING OBJECT PROPERTY
// =================================================

let student = {
    name: "Shashi",
    age: 21,
    branch: "CSE"
};

console.log(student);

// Update age
student.age = 22;

console.log(student);


// =================================================
// 2. UPDATING STRING VALUE
// =================================================

student.name = "Rahul";

console.log(student);


// =================================================
// 3. ADDING A NEW PROPERTY
// =================================================

student.city = "Balasore";

console.log(student);


// =================================================
// 4. ADDING MULTIPLE PROPERTIES
// =================================================

student.college = "ABC College";
student.cgpa = 8.5;

console.log(student);


// =================================================
// 5. DELETING A PROPERTY
// =================================================

delete student.city;

console.log(student);


// =================================================
// 6. BRACKET NOTATION
// =================================================

console.log(student["name"]);
console.log(student["age"]);
console.log(student["branch"]);


// =================================================
// 7. DOT NOTATION vs BRACKET NOTATION
// =================================================

console.log(student.name);
console.log(student["name"]);


// =================================================
// PRACTICE QUESTIONS
// =================================================

// Q1. Create an object `car` with:
// brand: "Toyota"
// model: "Fortuner"
// price: 4000000
//
// Update the price to 4500000.


// Q2. Create an object `person` with:
// name
// age
//
// Add a new property:
// city


// Q3. Create an object `mobile` with:
// brand
// model
// price
//
// Delete the price property.


// Q4. Create an object `book` with:
// title
// author
// price
//
// Print the title using bracket notation.


// Q5. Create an object `employee` with:
// name
// age
// salary
//
// Update the salary.
// Add a new property `department`.
// Delete the age property.




/*
    12_Objects.js
    JAVASCRIPT OBJECTS - BASIC
    COMMIT 3
*/

// =================================================
// 1. SIMPLE REAL-WORLD OBJECT
// =================================================

let student = {
    name: "Shashi",
    age: 21,
    course: "CSE",
    cgpa: 8.2
};

console.log(student);


// =================================================
// 2. ACCESSING OBJECT VALUES
// =================================================

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.cgpa);


// =================================================
// 3. UPDATING VALUES
// =================================================

student.age = 22;
student.cgpa = 8.5;

console.log(student);


// =================================================
// 4. ADDING NEW PROPERTIES
// =================================================

student.city = "Bhubaneswar";
student.college = "ABC College";

console.log(student);


// =================================================
// 5. ACCESSING USING BRACKET NOTATION
// =================================================

console.log(student["name"]);
console.log(student["city"]);
console.log(student["college"]);


// =================================================
// 6. DELETING A PROPERTY
// =================================================

delete student.city;

console.log(student);


// =================================================
// 7. ANOTHER REAL-WORLD OBJECT
// =================================================

let product = {
    name: "Laptop",
    brand: "HP",
    price: 55000,
    inStock: true
};

console.log(product.name);
console.log(product.price);


// Update price
product.price = 50000;

// Add property
product.color = "Black";

// Delete property
delete product.inStock;

console.log(product);


// =================================================
// PRACTICE QUESTIONS
// =================================================

// Q1. Create an object `movie` with:
// name
// language
// rating
//
// Print all the values.


// Q2. Create an object `bike` with:
// brand: "Honda"
// model: "CBR"
// price: 200000
//
// Update the price to 220000.
// Print the updated object.


// Q3. Create an object `phone` with:
// brand
// model
// price
//
// Add a new property `color`.
// Print the object.


// Q4. Create an object `laptop` with:
// brand
// ram
// storage
// price
//
// Update the RAM.
// Add a new property `processor`.
// Delete the storage property.
// Print the object.


// Q5. Create an object `student` with:
// name
// age
// branch
// cgpa
//
// Update the CGPA.
// Add a new property `city`.
// Delete the age property.
// Print the final object.


// Q6. Create an object `employee` with:
// name
// department
// salary
//
// Print the name using dot notation.
// Print the salary using bracket notation.


// Q7. Create an object `book` with:
// title
// author
// price
//
// Update the price.
// Add a new property `pages`.
// Delete the author.
// Print the final object.


// Q8. Create an object `car` with:
// brand
// model
// year
//
// Print the brand.
// Update the year.
// Add a new property `color`.
// Print the final object.


/*
    12_Objects.js
    JAVASCRIPT OBJECTS
*/

// =================================================
// OBJECTS + VARIABLES
// =================================================


// =================================================
// 1. STORING OBJECT IN A VARIABLE
// =================================================

let student = {
    name: "Shashi",
    age: 21,
    branch: "CSE"
};

console.log(student);


// =================================================
// 2. ACCESSING OBJECT PROPERTIES
// =================================================

console.log(student.name);
console.log(student.age);
console.log(student.branch);


// =================================================
// 3. USING VARIABLES AS OBJECT VALUES
// =================================================

let studentName = "Rahul";
let studentAge = 22;
let studentBranch = "CSE";

let student2 = {
    name: studentName,
    age: studentAge,
    branch: studentBranch
};

console.log(student2);


// =================================================
// 4. CHANGING OBJECT DATA USING A VARIABLE
// =================================================

let newAge = 23;

student2.age = newAge;

console.log(student2);


// =================================================
// 5. ADDING A PROPERTY USING A VARIABLE
// =================================================

let city = "Bhubaneswar";

student2.city = city;

console.log(student2);


// =================================================
// 6. SHORT PROPERTY SYNTAX
// =================================================

// If variable name and property name are same,
// we can directly use the variable name.

let name = "Amit";
let age = 20;

let student3 = {
    name,
    age
};

console.log(student3);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create variables:
// name = "Rahul"
// age = 22
// course = "JavaScript"
//
// Create a `student` object using these variables.
// Print the object.


// Q2. Create variables:
// brand = "Samsung"
// price = 30000
//
// Create a `mobile` object using these variables.
// Print the brand and price.


// Q3. Create variables:
// productName
// productPrice
// inStock
//
// Create a `product` object using these variables.
// Print the object.


// Q4. Create an object `employee` using:
// name = "Amit"
// salary = 40000
//
// Create another variable `newSalary`.
// Update the employee salary using newSalary.
// Print the object.


// Q5. Create an object `car` using variables:
// brand
// model
// price
//
// Create a variable `color`.
// Add color to the car object.
// Print the final object.


// Q6. Create variables:
// bookName = "JavaScript Basics"
// authorName = "John"
// bookPrice = 500
//
// Create a `book` object using these variables.
// Print the book name and price.


// Q7. Create variables:
// city = "Delhi"
// country = "India"
//
// Create a `location` object using these variables.
// Print both values.


// Q8. Create variables:
// name = "Rohit"
// age = 25
//
// Create an object using short property syntax.
// Print the object.




/*
    12_Objects.js
    JAVASCRIPT OBJECTS
    COMMIT 5

    TOPIC:
    Objects + Arrays
*/

// =================================================
// 1. ARRAY AS AN OBJECT PROPERTY
// =================================================

let student = {
    name: "Shashi",
    age: 21,
    marks: [80, 85, 90]
};

console.log(student);


// =================================================
// 2. ACCESSING AN ARRAY FROM AN OBJECT
// =================================================

console.log(student.marks);


// =================================================
// 3. ACCESSING ARRAY ELEMENTS
// =================================================

console.log(student.marks[0]);
console.log(student.marks[1]);
console.log(student.marks[2]);


// =================================================
// 4. CHANGING ARRAY VALUES
// =================================================

student.marks[0] = 95;

console.log(student.marks);


// =================================================
// 5. ADDING VALUES TO THE ARRAY
// =================================================

student.marks.push(88);

console.log(student.marks);


// =================================================
// 6. REMOVING VALUES FROM THE ARRAY
// =================================================

student.marks.pop();

console.log(student.marks);


// =================================================
// 7. OBJECT WITH DIFFERENT ARRAY TYPES
// =================================================

let person = {
    name: "Rahul",
    hobbies: ["Cricket", "Reading", "Coding"]
};

console.log(person.name);
console.log(person.hobbies);

console.log(person.hobbies[0]);
console.log(person.hobbies[1]);


// =================================================
// 8. UPDATING ARRAY INSIDE OBJECT
// =================================================

person.hobbies[1] = "Gaming";

console.log(person.hobbies);


// =================================================
// 9. ADDING AN ARRAY VALUE
// =================================================

person.hobbies.push("Traveling");

console.log(person.hobbies);


// =================================================
// 10. REAL-WORLD EXAMPLE
// =================================================

let product = {
    name: "Laptop",
    brand: "HP",
    price: 50000,
    colors: ["Black", "Silver", "White"]
};

console.log(product.name);
console.log(product.colors);

console.log(product.colors[0]);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a `student` object with:
// name
// age
// marks: [70, 80, 90]
//
// Print the first mark.


// Q2. Create a `person` object with:
// name
// hobbies: ["Cricket", "Music", "Coding"]
//
// Print the second hobby.


// Q3. Create a `mobile` object with:
// brand
// model
// colors: ["Black", "Blue", "White"]
//
// Change the first color to "Red".
// Print the colors.


// Q4. Create a `student` object with:
// name
// subjects: ["Math", "English", "Science"]
//
// Add "Computer" to the subjects array.
// Print the final array.


// Q5. Create a `product` object with:
// name
// price
// sizes: ["S", "M", "L"]
//
// Remove the last size.
// Print the final sizes array.


// Q6. Create a `car` object with:
// brand
// model
// features: ["AC", "ABS", "Airbag"]
//
// Print the first feature.
// Add "Sunroof".
// Print the final features array.


// Q7. Create a `movie` object with:
// name
// actors: ["Actor1", "Actor2", "Actor3"]
//
// Change the second actor.
// Print the final actors array.


// Q8. Create a `book` object with:
// title
// authors: ["Author1", "Author2"]
//
// Add another author.
// Print the authors array.