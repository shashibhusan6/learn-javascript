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



/*
    12_Objects.js
    JAVASCRIPT OBJECTS

    TOPIC:
    OBJECT DESTRUCTURING
*/

// =================================================
// 1. WHAT IS OBJECT DESTRUCTURING?
// =================================================

/*
Object destructuring allows us to take values
from an object and store them in variables.
*/

let student = {
    name: "Shashi",
    age: 21,
    branch: "CSE"
};

let { name, age, branch } = student;

console.log(name);
console.log(age);
console.log(branch);


// =================================================
// 2. DESTRUCTURING SELECTED PROPERTIES
// =================================================

let person = {
    name: "Rahul",
    age: 22,
    city: "Delhi"
};

let { name: personName, city } = person;

console.log(personName);
console.log(city);


// =================================================
// 3. DESTRUCTURING WITH DIFFERENT VARIABLE NAME
// =================================================

let product = {
    name: "Laptop",
    price: 50000
};

let { name: productName, price: productPrice } = product;

console.log(productName);
console.log(productPrice);


// =================================================
// 4. DEFAULT VALUE
// =================================================

let employee = {
    name: "Amit",
    salary: 40000
};

let { name: employeeName, department = "IT" } = employee;

console.log(employeeName);
console.log(department);


// =================================================
// 5. DESTRUCTURING WITH ARRAY PROPERTY
// =================================================

let student2 = {
    name: "Rohit",
    marks: [80, 85, 90]
};

let { name: studentName, marks } = student2;

console.log(studentName);
console.log(marks);


// =================================================
// 6. ACCESSING ARRAY AFTER DESTRUCTURING
// =================================================

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);


// =================================================
// 7. DESTRUCTURING A NESTED OBJECT
// =================================================

let student3 = {
    name: "Suresh",

    address: {
        city: "Bhubaneswar",
        state: "Odisha"
    }
};

let { address } = student3;

console.log(address.city);
console.log(address.state);


// =================================================
// 8. SIMPLE NESTED DESTRUCTURING
// =================================================

let student4 = {
    name: "Karan",

    address: {
        city: "Delhi"
    }
};

let {
    address: { city: studentCity }
} = student4;

console.log(studentCity);


// =================================================
// 9. DESTRUCTURING IN A SIMPLE EXAMPLE
// =================================================

let car = {
    brand: "Toyota",
    model: "Fortuner",
    price: 4000000
};

let { brand, model, price } = car;

console.log(brand);
console.log(model);
console.log(price);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create an object `student` with:
// name
// age
// course
//
// Use destructuring to store all three
// values in separate variables.
// Print them.


// Q2. Create an object `car` with:
// brand
// model
// price
//
// Use destructuring to get brand and price.
// Print them.


// Q3. Create an object `product` with:
// name
// price
// category
//
// Use destructuring to get:
// productName
// productPrice
//
// Print both.


// Q4. Create an object `employee` with:
// name
// salary
//
// Use destructuring.
// Give `salary` a default value of 30000.
// Print the values.


// Q5. Create an object `person` with:
// name
// hobbies: ["Cricket", "Coding", "Reading"]
//
// Use destructuring to get the hobbies array.
// Print the first hobby.


// Q6. Create an object `mobile` with:
// brand
// model
// price
//
// Use destructuring with different variable names:
// mobileBrand
// mobilePrice
//
// Print both.


// Q7. Create an object `student` with:
// name
// address: {
//     city,
//     state
// }
//
// Use destructuring to get city and state.
// Print both.


// Q8. Create an object `book` with:
// title
// author
// price
//
// Use destructuring to get all three values.
// Print them.


// Q9. Create an object `movie` with:
// name
// rating
//
// Use destructuring to store the values
// in variables called movieName and movieRating.
// Print them.


// Q10. Create an object `person` with:
// name
// age
// city
//
// Use destructuring to get only name and city.
// Print them.