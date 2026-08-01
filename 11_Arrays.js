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






/*
=================================================
        11_Arrays.js
         BASIC ARRAY OPERATIONS
=================================================

Today we learn:

1. push()
2. pop()
3. unshift()
4. shift()
5. Using for loop with arrays
*/


// =================================================
// 1. push()
// =================================================

/*
push() adds an element to the END of an array.
*/

let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");

console.log(fruits);

/*
Output:
["Apple", "Banana", "Mango", "Orange"]
*/


// =================================================
// 2. pop()
// =================================================

/*
pop() removes the LAST element of an array.
*/

let fruits2 = ["Apple", "Banana", "Mango"];

fruits2.pop();

console.log(fruits2);

/*
Output:
["Apple", "Banana"]
*/


// =================================================
// 3. unshift()
// =================================================

/*
unshift() adds an element to the BEGINNING
of an array.
*/

let fruits3 = ["Banana", "Mango"];

fruits3.unshift("Apple");

console.log(fruits3);

/*
Output:
["Apple", "Banana", "Mango"]
*/


// =================================================
// 4. shift()
// =================================================

/*
shift() removes the FIRST element of an array.
*/

let fruits4 = ["Apple", "Banana", "Mango"];

fruits4.shift();

console.log(fruits4);

/*
Output:
["Banana", "Mango"]
*/


// =================================================
// 5. PUSH WITH MULTIPLE VALUES
// =================================================

let numbers = [10, 20];

numbers.push(30, 40, 50);

console.log(numbers);

/*
Output:
[10, 20, 30, 40, 50]
*/


// =================================================
// 6. UNSHIFT WITH MULTIPLE VALUES
// =================================================

let numbers2 = [30, 40];

numbers2.unshift(10, 20);

console.log(numbers2);

/*
Output:
[10, 20, 30, 40]
*/


// =================================================
// 7. ARRAY AFTER PUSH AND POP
// =================================================

let numbers3 = [10, 20, 30];

numbers3.push(40);

console.log(numbers3);

numbers3.pop();

console.log(numbers3);

/*
Output:

[10, 20, 30, 40]
[10, 20, 30]
*/


// =================================================
// 8. ARRAY AFTER UNSHIFT AND SHIFT
// =================================================

let numbers4 = [20, 30, 40];

numbers4.unshift(10);

console.log(numbers4);

numbers4.shift();

console.log(numbers4);

/*
Output:

[10, 20, 30, 40]
[20, 30, 40]
*/


// =================================================
// 9. PRINT ALL ARRAY ELEMENTS USING FOR LOOP
// =================================================

let marks = [85, 90, 75, 88, 92];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


// =================================================
// 10. FIND SUM OF ARRAY ELEMENTS
// =================================================

let values = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < values.length; i++) {
    sum = sum + values[i];
}

console.log("Sum =", sum);


// =================================================
// 11. FIND LARGEST ELEMENT
// =================================================

let numbers5 = [10, 50, 30, 90, 20];

let largest = numbers5[0];

for (let i = 1; i < numbers5.length; i++) {

    if (numbers5[i] > largest) {
        largest = numbers5[i];
    }

}

console.log("Largest =", largest);


// =================================================
// 12. FIND SMALLEST ELEMENT
// =================================================

let numbers6 = [10, 50, 30, 90, 20];

let smallest = numbers6[0];

for (let i = 1; i < numbers6.length; i++) {

    if (numbers6[i] < smallest) {
        smallest = numbers6[i];
    }

}

console.log("Smallest =", smallest);


// =================================================
// QUICK REVISION
// =================================================

/*

push()
------
Adds element at the END.

Example:
[10, 20]
push(30)

Result:
[10, 20, 30]


pop()
-----
Removes element from the END.

Example:
[10, 20, 30]
pop()

Result:
[10, 20]


unshift()
---------
Adds element at the BEGINNING.

Example:
[20, 30]
unshift(10)

Result:
[10, 20, 30]


shift()
--------
Removes element from the BEGINNING.

Example:
[10, 20, 30]
shift()

Result:
[20, 30]


=================================================
        ARRAY OPERATION TABLE
=================================================

Method       Action
--------------------------------
push()       Add at end
pop()        Remove from end
unshift()    Add at beginning
shift()      Remove from beginning

*/




/*
=================================================
        11_Arrays.js
        ARRAY PRACTICE
=================================================

BASIC ARRAY QUESTIONS
Q1 - Q15
=================================================
*/


// =================================================
// Q1. Create an array of 5 numbers and print it.
// =================================================


// =================================================
// Q2. Create an array of 5 names and print the
// first element.
// =================================================


// =================================================
// Q3. Print the last element of an array.
// =================================================


// =================================================
// Q4. Find the length of an array.
// =================================================


// =================================================
// Q5. Change the second element of an array.
// =================================================


// =================================================
// Q6. Add an element at the end using push().
// =================================================


// =================================================
// Q7. Remove the last element using pop().
// =================================================


// =================================================
// Q8. Add an element at the beginning using
// unshift().
// =================================================


// =================================================
// Q9. Remove the first element using shift().
// =================================================


// =================================================
// Q10. Print all elements of an array using
// a for loop.
// =================================================


// =================================================
// Q11. Find the sum of all elements in an array.
//
// Example:
// [10, 20, 30, 40]
// Output: 100
// =================================================


// =================================================
// Q12. Find the largest element in an array.
//
// Example:
// [10, 50, 20, 80, 30]
// Output: 80
// =================================================


// =================================================
// Q13. Find the smallest element in an array.
//
// Example:
// [10, 50, 20, 80, 30]
// Output: 10
// =================================================


// =================================================
// Q14. Count how many even numbers are present.
//
// Example:
// [10, 15, 20, 25, 30]
// Output: 3
// =================================================


// =================================================
// Q15. Count how many odd numbers are present.
//
// Example:
// [10, 15, 20, 25, 30]
// Output: 2
// =================================================





/*
=================================================
        11_Arrays.js
        ARRAY PRACTICE - ANSWERS
=================================================
*/


// =================================================
// Q1. Create an array of 5 numbers and print it.
// =================================================

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);


// =================================================
// Q2. Create an array of 5 names and print the
// first element.
// =================================================

let names = ["Shashi", "Rahul", "Aman", "Rohit", "Priya"];

console.log(names[0]);


// =================================================
// Q3. Print the last element of an array.
// =================================================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[fruits.length - 1]);


// =================================================
// Q4. Find the length of an array.
// =================================================

let colors = ["Red", "Blue", "Green", "Yellow"];

console.log(colors.length);


// =================================================
// Q5. Change the second element of an array.
// =================================================

let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];

cities[1] = "Bhubaneswar";

console.log(cities);


// =================================================
// Q6. Add an element at the end using push().
// =================================================

let animals = ["Dog", "Cat", "Cow"];

animals.push("Horse");

console.log(animals);


// =================================================
// Q7. Remove the last element using pop().
// =================================================

let cars = ["BMW", "Audi", "Tesla"];

cars.pop();

console.log(cars);


// =================================================
// Q8. Add an element at the beginning using
// unshift().
// =================================================

let languages = ["Java", "Python", "JavaScript"];

languages.unshift("C");

console.log(languages);


// =================================================
// Q9. Remove the first element using shift().
// =================================================

let flowers = ["Rose", "Lily", "Lotus"];

flowers.shift();

console.log(flowers);


// =================================================
// Q10. Print all elements of an array using
// a for loop.
// =================================================

let marks = [85, 90, 75, 88, 92];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


// =================================================
// Q11. Find the sum of all elements in an array.
// =================================================

let values = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < values.length; i++) {
    sum = sum + values[i];
}

console.log("Sum =", sum);


// =================================================
// Q12. Find the largest element in an array.
// =================================================

let numbers1 = [10, 50, 20, 80, 30];

let largest = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {

    if (numbers1[i] > largest) {
        largest = numbers1[i];
    }

}

console.log("Largest =", largest);


// =================================================
// Q13. Find the smallest element in an array.
// =================================================

let numbers2 = [10, 50, 20, 80, 30];

let smallest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {

    if (numbers2[i] < smallest) {
        smallest = numbers2[i];
    }

}

console.log("Smallest =", smallest);


// =================================================
// Q14. Count how many even numbers are present.
// =================================================

let numbers3 = [10, 15, 20, 25, 30];

let evenCount = 0;

for (let i = 0; i < numbers3.length; i++) {

    if (numbers3[i] % 2 === 0) {
        evenCount++;
    }

}

console.log("Even Count =", evenCount);


// =================================================
// Q15. Count how many odd numbers are present.
// =================================================

let numbers4 = [10, 15, 20, 25, 30];

let oddCount = 0;

for (let i = 0; i < numbers4.length; i++) {

    if (numbers4[i] % 2 !== 0) {
        oddCount++;
    }

}

console.log("Odd Count =", oddCount);
