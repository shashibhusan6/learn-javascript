/*
    12_Objects.js
    JAVASCRIPT OBJECTS

    TOPIC:
    Object Methods + this
*/

// =================================================
// 1. WHAT IS AN OBJECT METHOD?
// =================================================

/*
A function inside an object is called a method.
*/

let student = {
    name: "Shashi",
    age: 21,

    greet: function() {
        console.log("Hello");
    }
};

student.greet();


// =================================================
// 2. METHOD WITH A MESSAGE
// =================================================

let person = {
    name: "Rahul",

    sayHello: function() {
        console.log("Hello, everyone!");
    }
};

person.sayHello();


// =================================================
// 3. METHOD USING OBJECT PROPERTY
// =================================================

let student2 = {
    name: "Amit",

    showName: function() {
        console.log(student2.name);
    }
};

student2.showName();


// =================================================
// 4. USING `this` KEYWORD
// =================================================

/*
`this` refers to the current object.
*/

let student3 = {
    name: "Rohit",

    showName: function() {
        console.log(this.name);
    }
};

student3.showName();


// =================================================
// 5. `this` WITH MULTIPLE PROPERTIES
// =================================================

let student4 = {
    name: "Suresh",
    age: 22,

    showDetails: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

student4.showDetails();


// =================================================
// 6. METHOD USING MULTIPLE VALUES
// =================================================

let product = {
    name: "Laptop",
    price: 50000,

    showProduct: function() {
        console.log(this.name);
        console.log(this.price);
    }
};

product.showProduct();


// =================================================
// 7. METHOD WITH A CALCULATION
// =================================================

let product2 = {
    price: 50000,
    discount: 5000,

    finalPrice: function() {
        console.log(this.price - this.discount);
    }
};

product2.finalPrice();


// =================================================
// 8. METHOD CAN MODIFY OBJECT DATA
// =================================================

let student5 = {
    name: "Rahul",
    age: 20,

    increaseAge: function() {
        this.age = this.age + 1;
    }
};

console.log(student5.age);

student5.increaseAge();

console.log(student5.age);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create an object `person` with:
// name
//
// Create a method `sayHello()`.
// Print "Hello".


// Q2. Create an object `student` with:
// name
// age
//
// Create a method `showDetails()`.
// Print the name and age using `this`.


// Q3. Create an object `car` with:
// brand
// model
//
// Create a method `showCar()`.
// Print the brand and model using `this`.


// Q4. Create an object `product` with:
// name
// price
//
// Create a method `showPrice()`.
// Print the price using `this`.


// Q5. Create an object `employee` with:
// name
// salary
//
// Create a method `showDetails()`.
// Print the employee's name and salary using `this`.


// Q6. Create an object `student` with:
// name
// age
//
// Create a method `increaseAge()`.
// Increase the age by 1 using `this`.
//
// Print the age before and after calling the method.


// Q7. Create an object `product` with:
// price
// discount
//
// Create a method `finalPrice()`.
// Calculate:
// price - discount
//
// Print the final price.


// Q8. Create an object `person` with:
// name
// city
//
// Create a method `showDetails()`.
// Print:
// "My name is ___ and I live in ___."
//
// Use `this` to access the values.