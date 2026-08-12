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



/*
    12_Objects.js
    JAVASCRIPT OBJECTS

    TOPIC:
    OBJECT SPREAD OPERATOR
*/

// =================================================
// 1. WHAT IS SPREAD OPERATOR?
// =================================================

/*
The spread operator (...) is used to
copy or combine object properties.
*/

let student = {
    name: "Shashi",
    age: 21
};

let studentCopy = {
    ...student
};

console.log(studentCopy);


// =================================================
// 2. COPYING AN OBJECT
// =================================================

let person = {
    name: "Rahul",
    age: 22,
    city: "Delhi"
};

let personCopy = {
    ...person
};

console.log(personCopy);


// =================================================
// 3. COPY AND ADD A NEW PROPERTY
// =================================================

let student2 = {
    name: "Amit",
    age: 20
};

let studentCopy2 = {
    ...student2,
    branch: "CSE"
};

console.log(studentCopy2);


// =================================================
// 4. COPY AND UPDATE A PROPERTY
// =================================================

let student3 = {
    name: "Rohit",
    age: 21
};

let updatedStudent = {
    ...student3,
    age: 22
};

console.log(updatedStudent);


// =================================================
// 5. COMBINING TWO OBJECTS
// =================================================

let first = {
    name: "Shashi",
    age: 21
};

let second = {
    branch: "CSE",
    city: "Bhubaneswar"
};

let combined = {
    ...first,
    ...second
};

console.log(combined);


// =================================================
// 6. COMBINING THREE OBJECTS
// =================================================

let personal = {
    name: "Rahul",
    age: 22
};

let education = {
    degree: "B.Tech",
    branch: "CSE"
};

let location = {
    city: "Delhi"
};

let student4 = {
    ...personal,
    ...education,
    ...location
};

console.log(student4);


// =================================================
// 7. SAME PROPERTY IN TWO OBJECTS
// =================================================

let obj1 = {
    name: "Amit",
    age: 20
};

let obj2 = {
    name: "Rahul",
    city: "Mumbai"
};

let result = {
    ...obj1,
    ...obj2
};

console.log(result);

/*
When two objects have the same property,
the value from the later object is used.
*/


// =================================================
// 8. SPREAD DOES NOT CHANGE ORIGINAL OBJECT
// =================================================

let product = {
    name: "Laptop",
    price: 50000
};

let productCopy = {
    ...product
};

productCopy.price = 55000;

console.log(product);
console.log(productCopy);


// =================================================
// 9. ADDING MULTIPLE PROPERTIES
// =================================================

let car = {
    brand: "Toyota"
};

let newCar = {
    ...car,
    model: "Fortuner",
    price: 4000000
};

console.log(newCar);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create an object `student` with:
// name
// age
//
// Create a copy using the spread operator.
// Print both objects.


// Q2. Create an object `person` with:
// name
// age
// city
//
// Create a copy using spread.
// Change the age in the copied object.
// Print both objects.


// Q3. Create an object `product` with:
// name
// price
//
// Create a new object using spread.
// Add a new property `brand`.
// Print the new object.


// Q4. Create two objects:
//
// personal:
// name
// age
//
// education:
// branch
// college
//
// Combine both objects using spread.
// Print the result.


// Q5. Create two objects:
//
// first:
// name
// age
//
// second:
// city
// country
//
// Combine both objects using spread.


// Q6. Create an object `car` with:
// brand
// model
//
// Create a new object using spread.
// Add `price` and `color`.
// Print the new object.


// Q7. Create two objects with the same property `name`.
//
// Combine them using spread.
// Check which name is present in the final object.


// Q8. Create an object `employee` with:
// name
// salary
//
// Create a copy.
// Update the salary only in the copied object.
// Print both objects.


// Q9. Create three objects:
//
// personal:
// name
//
// education:
// degree
//
// location:
// city
//
// Combine all three using spread.
// Print the final object.


// Q10. Create an object `mobile` with:
// brand
// model
// price
//
// Create a copy using spread.
// Change the price.
// Add a new property `color`.
// Print the original and copied objects.


/*
    12_Objects.js
    JAVASCRIPT OBJECTS

    TOPIC:
    ARRAYS OF OBJECTS
*/

// =================================================
// 1. WHAT IS AN ARRAY OF OBJECTS?
// =================================================

/*
An array can store multiple objects.

Example:
[
    { object1 },
    { object2 },
    { object3 }
]
*/

let students = [
    {
        name: "Shashi",
        age: 21,
        branch: "CSE"
    },
    {
        name: "Rahul",
        age: 22,
        branch: "ECE"
    },
    {
        name: "Amit",
        age: 20,
        branch: "IT"
    }
];

console.log(students);


// =================================================
// 2. ACCESSING THE FIRST OBJECT
// =================================================

console.log(students[0]);


// =================================================
// 3. ACCESSING OBJECT PROPERTIES
// =================================================

console.log(students[0].name);
console.log(students[0].age);
console.log(students[0].branch);


// =================================================
// 4. ACCESSING OTHER OBJECTS
// =================================================

console.log(students[1].name);
console.log(students[2].name);


// =================================================
// 5. UPDATING OBJECT DATA
// =================================================

students[0].age = 22;

console.log(students[0]);


// =================================================
// 6. ADDING A NEW PROPERTY
// =================================================

students[1].city = "Delhi";

console.log(students[1]);


// =================================================
// 7. DELETING A PROPERTY
// =================================================

delete students[2].branch;

console.log(students[2]);


// =================================================
// 8. ARRAY OF PRODUCT OBJECTS
// =================================================

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mobile",
        price: 30000
    },
    {
        name: "Tablet",
        price: 20000
    }
];

console.log(products);


// =================================================
// 9. ACCESSING PRODUCT DATA
// =================================================

console.log(products[0].name);
console.log(products[0].price);

console.log(products[1].name);
console.log(products[1].price);


// =================================================
// 10. MODIFYING PRODUCT DATA
// =================================================

products[0].price = 55000;

console.log(products[0]);


// =================================================
// 11. ARRAY OF OBJECTS WITH ARRAYS
// =================================================

let students2 = [
    {
        name: "Rohit",
        marks: [80, 85, 90]
    },
    {
        name: "Suresh",
        marks: [75, 88, 92]
    }
];

console.log(students2[0].name);
console.log(students2[0].marks);

console.log(students2[0].marks[0]);
console.log(students2[1].marks[2]);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create an array `students` containing
// 3 student objects.
//
// Each object should have:
// name
// age
// branch
//
// Print the first student's name.


// Q2. Create an array `products` containing
// 3 product objects.
//
// Each object should have:
// name
// price
//
// Print the price of the second product.


// Q3. Create an array `cars` containing
// 3 car objects.
//
// Each object should have:
// brand
// model
// price
//
// Print the third car's model.


// Q4. Create an array `employees` containing
// 3 employee objects.
//
// Each object should have:
// name
// salary
//
// Update the salary of the first employee.
// Print the updated object.


// Q5. Create an array `books` containing
// 3 book objects.
//
// Each object should have:
// title
// author
// price
//
// Print the title of the second book.


// Q6. Create an array `students` containing
// 2 student objects.
//
// Each object should have:
// name
// marks: [80, 85, 90]
//
// Print the first student's first mark.


// Q7. Create an array `mobiles` containing
// 3 mobile objects.
//
// Each object should have:
// brand
// model
// price
//
// Change the price of the third mobile.
// Print the final array.


// Q8. Create an array `movies` containing
// 3 movie objects.
//
// Each object should have:
// name
// rating
//
// Print the name and rating of the first movie.


// Q9. Create an array `persons` containing
// 3 person objects.
//
// Each object should have:
// name
// age
// city
//
// Add a new property `country`
// to the first person.
// Print the first person.


// Q10. Create an array `products` containing
// 3 product objects.
//
// Each object should have:
// name
// price
// colors: ["Black", "White"]
//
// Print the first color of the second product.




/*
    12_Objects.js
    JAVASCRIPT OBJECTS

    FINAL OBJECT PRACTICE
*/

// =================================================
// PART 1 — BASIC OBJECT PRACTICE
// =================================================

// Q1. Create a `student` object with:
// name
// age
// branch
// cgpa
//
// Print all the properties.


// Q2. Create a `product` object with:
// name
// price
// brand
//
// Update the price.
// Add a new property `color`.
// Print the final object.


// Q3. Create a `person` object with:
// name
// age
// city
//
// Delete the age property.
// Print the final object.


// =================================================
// PART 2 — OBJECT + VARIABLES
// =================================================

// Q4. Create these variables:
// name = "Rahul"
// age = 22
// course = "CSE"
//
// Create a student object using these variables.
// Print the object.


// Q5. Create an object `employee` using:
// name = "Amit"
// salary = 40000
//
// Create a variable `newSalary`.
// Update the employee's salary using newSalary.
// Print the employee object.


// =================================================
// PART 3 — OBJECT METHODS + this
// =================================================

// Q6. Create an object `person` with:
// name
// age
//
// Create a method `showDetails()`.
// Use `this` to print the name and age.


// Q7. Create an object `product` with:
// name
// price
// discount
//
// Create a method `finalPrice()`.
// Calculate:
//
// price - discount
//
// Print the final price.


// =================================================
// PART 4 — NESTED OBJECTS
// =================================================

// Q8. Create a `student` object with:
// name
// age
//
// Add a nested `address` object containing:
// city
// state
//
// Print the city and state.


// Q9. Create a `product` object with:
// name
// price
//
// Add a nested `details` object containing:
// brand
// color
//
// Update the color.
// Print the final object.


// =================================================
// PART 5 — OBJECT METHODS
// =================================================

// Q10. Create an object `student` with:
// name
// age
// branch
//
// Use Object.keys() to print all keys.
// Use Object.values() to print all values.


// Q11. Create an object `car` with:
// brand
// model
// price
//
// Use Object.entries() to print all
// key-value pairs.


// Q12. Create an object `employee` with:
// name
// age
// salary
//
// Use a for...in loop to print:
// key -> value


// =================================================
// PART 6 — OBJECT DESTRUCTURING
// =================================================

// Q13. Create an object `student` with:
// name
// age
// branch
//
// Use destructuring to store all values
// in separate variables.
// Print the variables.


// Q14. Create an object `product` with:
// name
// price
// brand
//
// Use destructuring to store:
// name as productName
// price as productPrice
//
// Print both variables.


// =================================================
// PART 7 — OBJECT SPREAD
// =================================================

// Q15. Create an object `student` with:
// name
// age
//
// Create a copy using the spread operator.
// Add `branch` to the copied object.
// Print both objects.


// Q16. Create two objects:
//
// personal:
// name
// age
//
// education:
// branch
// college
//
// Combine them using the spread operator.
// Print the final object.


// =================================================
// PART 8 — ARRAYS OF OBJECTS
// =================================================

// Q17. Create an array containing 3 student objects.
//
// Each student should have:
// name
// age
// branch
//
// Print the name of the second student.


// Q18. Create an array containing 3 product objects.
//
// Each product should have:
// name
// price
//
// Update the price of the third product.
// Print the final array.


// Q19. Create an array containing 3 student objects.
//
// Each student should have:
// name
// marks: [80, 85, 90]
//
// Print the first mark of the second student.


// =================================================
// PART 9 — FINAL COMBINATION
// =================================================

// Q20. Create an array `students` containing
// 3 student objects.
//
// Each object should contain:
// name
// age
// branch
// marks: [80, 85, 90]
//
// Perform the following:
//
// 1. Print the first student's name.
// 2. Print the second student's first mark.
// 3. Update the third student's age.
// 4. Add a `city` property to the first student.
// 5. Print the final array.