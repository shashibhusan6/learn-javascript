/*
=================================================
        11_Arrays.js
        JAVASCRIPT ARRAYS - BASIC
=================================================

WHAT IS AN ARRAY?

An array is a collection of multiple values stored
in a single variable.

Example:

let numbers = [10, 20, 30, 40, 50];

Instead of:

let n1 = 10;
let n2 = 20;
let n3 = 30;

We can store them together in an array.
*/


// =================================================
// 1. CREATING AN ARRAY
// =================================================

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);


// =================================================
// 2. ARRAY CAN STORE DIFFERENT TYPES OF VALUES
// =================================================

let data = [10, "Hello", true, 25.5];

console.log(data);


// =================================================
// 3. ARRAY INDEX
// =================================================

/*
Array index starts from 0.

Example:

Index:    0    1    2    3    4
Value:   10   20   30   40   50
*/

let marks = [90, 80, 70, 60, 50];

console.log(marks[0]); // 90
console.log(marks[1]); // 80
console.log(marks[4]); // 50


// =================================================
// 4. ACCESSING ARRAY ELEMENTS
// =================================================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]);
console.log(fruits[2]);


// =================================================
// 5. CHANGING AN ARRAY ELEMENT
// =================================================

let colors = ["Red", "Blue", "Green"];

colors[1] = "Yellow";

console.log(colors);

/*
Original:
["Red", "Blue", "Green"]

After changing:
["Red", "Yellow", "Green"]
*/


// =================================================
// 6. ARRAY LENGTH
// =================================================

let students = ["Rahul", "Amit", "Ravi", "Priya"];

console.log(students.length);

/*
length tells us how many elements
are present in the array.
*/


// =================================================
// 7. FIRST ELEMENT
// =================================================

let numbers2 = [10, 20, 30, 40, 50];

console.log(numbers2[0]);


// =================================================
// 8. LAST ELEMENT
// =================================================

console.log(numbers2[numbers2.length - 1]);

/*
Why?

length = 5

Last index = 5 - 1 = 4

So:

numbers2[4] → 50
*/


// =================================================
// 9. ARRAY WITH STRING VALUES
// =================================================

let names = ["Shashi", "Rahul", "Aman", "Rohit"];

console.log(names[0]);
console.log(names[3]);


// =================================================
// 10. LOOP THROUGH AN ARRAY
// =================================================

let nums = [10, 20, 30, 40, 50];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}


/*
OUTPUT:

10
20
30
40
50
*/


// =================================================
// 11. BASIC ARRAY SUM
// =================================================

let values = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < values.length; i++) {
    sum = sum + values[i];
}

console.log("Sum =", sum);


// =================================================
// 12. IMPORTANT POINTS
// =================================================

/*

1. Array stores multiple values in one variable.

2. Array index starts from 0.

3. First element:
   array[0]

4. Last element:
   array[array.length - 1]

5. length gives the number of elements.

6. Array elements can be changed.

7. for loop can be used to access all elements.

*/


// =================================================
// QUICK REVISION
// =================================================

/*

let numbers = [10, 20, 30, 40, 50];

numbers[0]                 → 10
numbers[2]                 → 30
numbers.length             → 5
numbers[numbers.length-1]  → 50

Changing element:

numbers[1] = 25;

Now:

[10, 25, 30, 40, 50]

*/