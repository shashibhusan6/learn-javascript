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




/*
    12_Objects.js
    JAVASCRIPT OBJECTS

    TOPIC:
    NESTED OBJECTS
*/

// =================================================
// 1. WHAT IS A NESTED OBJECT?
// =================================================

/*
An object inside another object
is called a nested object.
*/

let student = {
    name: "Shashi",
    age: 21,

    address: {
        city: "Bhubaneswar",
        state: "Odisha"
    }
};

console.log(student);


// =================================================
// 2. ACCESSING NESTED OBJECT
// =================================================

console.log(student.address);


// =================================================
// 3. ACCESSING NESTED PROPERTIES
// =================================================

console.log(student.address.city);
console.log(student.address.state);


// =================================================
// 4. USING BRACKET NOTATION
// =================================================

console.log(student["address"]["city"]);
console.log(student["address"]["state"]);


// =================================================
// 5. UPDATING NESTED PROPERTY
// =================================================

student.address.city = "Cuttack";

console.log(student.address.city);


// =================================================
// 6. ADDING PROPERTY TO NESTED OBJECT
// =================================================

student.address.pincode = 751001;

console.log(student.address);


// =================================================
// 7. DELETING NESTED PROPERTY
// =================================================

delete student.address.pincode;

console.log(student.address);


// =================================================
// 8. ANOTHER NESTED OBJECT
// =================================================

let employee = {
    name: "Rahul",
    salary: 40000,

    company: {
        name: "ABC",
        location: "Bangalore"
    }
};

console.log(employee.name);
console.log(employee.company.name);
console.log(employee.company.location);


// =================================================
// 9. UPDATING NESTED DATA
// =================================================

employee.company.location = "Delhi";

console.log(employee.company.location);


// =================================================
// 10. REAL-WORLD EXAMPLE
// =================================================

let product = {
    name: "Laptop",
    price: 50000,

    specifications: {
        ram: "8GB",
        storage: "512GB",
        processor: "i5"
    }
};

console.log(product.name);
console.log(product.specifications.ram);
console.log(product.specifications.storage);
console.log(product.specifications.processor);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a `student` object with:
// name
// age
//
// Add a nested `address` object containing:
// city
// state
//
// Print the city.


// Q2. Create a `person` object with:
// name
// age
//
// Add a nested `address` object containing:
// city
// country
//
// Print the country.


// Q3. Create a `product` object with:
// name
// price
//
// Add a nested `details` object containing:
// brand
// color
//
// Print the brand and color.


// Q4. Create an `employee` object with:
// name
// salary
//
// Add a nested `company` object containing:
// name
// location
//
// Update the company location.
// Print the final object.


// Q5. Create a `car` object with:
// brand
// model
//
// Add a nested `engine` object containing:
// type
// power
//
// Print the engine type and power.


// Q6. Create a `student` object with:
// name
// age
//
// Add a nested `address` object containing:
// city
// state
// pincode
//
// Update the pincode.
// Print the updated pincode.


// Q7. Create a `mobile` object with:
// brand
// price
//
// Add a nested `specifications` object containing:
// ram
// storage
//
// Print the RAM and storage.


// Q8. Create a `book` object with:
// title
// price
//
// Add a nested `author` object containing:
// name
// country
//
// Print the author's name and country.


/*
    12_Objects.js
    JAVASCRIPT OBJECTS

    TOPIC:
    LOOPING THROUGH OBJECTS
    Object.keys()
    Object.values()
    Object.entries()
*/

// =================================================
// 1. for...in LOOP
// =================================================

/*
The for...in loop is used to loop
through the keys of an object.
*/

let student = {
    name: "Shashi",
    age: 21,
    branch: "CSE"
};

for (let key in student) {
    console.log(key);
}


// =================================================
// 2. GETTING VALUES USING for...in
// =================================================

for (let key in student) {
    console.log(student[key]);
}


// =================================================
// 3. GETTING BOTH KEY AND VALUE
// =================================================

for (let key in student) {
    console.log(key, student[key]);
}


// =================================================
// 4. Object.keys()
// =================================================

/*
Object.keys() returns all keys
of an object in an array.
*/

let keys = Object.keys(student);

console.log(keys);


// =================================================
// 5. Object.values()
// =================================================

/*
Object.values() returns all values
of an object in an array.
*/

let values = Object.values(student);

console.log(values);


// =================================================
// 6. Object.entries()
// =================================================

/*
Object.entries() returns both keys
and values as arrays.
*/

let entries = Object.entries(student);

console.log(entries);


// =================================================
// 7. Object.keys() WITH LOOP
// =================================================

let person = {
    name: "Rahul",
    age: 22,
    city: "Delhi"
};

let personKeys = Object.keys(person);

for (let key of personKeys) {
    console.log(key);
}


// =================================================
// 8. Object.values() WITH LOOP
// =================================================

let personValues = Object.values(person);

for (let value of personValues) {
    console.log(value);
}


// =================================================
// 9. Object.entries() WITH LOOP
// =================================================

let personEntries = Object.entries(person);

for (let entry of personEntries) {
    console.log(entry);
}


// =================================================
// 10. SIMPLE REAL-WORLD EXAMPLE
// =================================================

let product = {
    name: "Laptop",
    brand: "HP",
    price: 50000
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create an object `student` with:
// name
// age
// branch
//
// Use for...in to print all the keys.


// Q2. Create an object `student` with:
// name
// age
// branch
//
// Use for...in to print all the values.


// Q3. Create an object `car` with:
// brand
// model
// price
//
// Use for...in to print both key and value.


// Q4. Create an object `mobile` with:
// brand
// model
// price
//
// Use Object.keys() to get all keys.
// Print the result.


// Q5. Create an object `product` with:
// name
// price
// inStock
//
// Use Object.values().
// Print all values.


// Q6. Create an object `employee` with:
// name
// age
// salary
//
// Use Object.entries().
// Print the result.


// Q7. Create an object `book` with:
// title
// author
// price
//
// Use Object.keys() and a loop
// to print each key.


// Q8. Create an object `person` with:
// name
// age
// city
//
// Use Object.values() and a loop
// to print each value.


// Q9. Create an object `product` with:
// name
// brand
// price
//
// Use Object.entries() and a loop
// to print each key and value.


// Q10. Create an object `student` with:
// name
// age
// course
//
// Use for...in to print:
// key -> value
//
// Example:
// name -> Shashi