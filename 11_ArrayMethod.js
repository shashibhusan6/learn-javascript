/*
=================================================
            11_ArrayMethod.js
     JAVASCRIPT ARRAY METHODS
=================================================

This file contains the most important array methods
for JavaScript and Placement Preparation.

=================================================
            BASIC ARRAY METHODS
=================================================
*/


// =================================================
// 1. push()
// Adds element(s) at the end.
// =================================================

let fruits1 = ["Apple", "Banana"];

fruits1.push("Mango");

console.log(fruits1);

/*
Output:
["Apple", "Banana", "Mango"]
*/


// =================================================
// 2. pop()
// Removes the last element.
// =================================================

let fruits2 = ["Apple", "Banana", "Mango"];

fruits2.pop();

console.log(fruits2);

/*
Output:
["Apple", "Banana"]
*/


// =================================================
// 3. unshift()
// Adds element(s) at the beginning.
// =================================================

let fruits3 = ["Banana", "Mango"];

fruits3.unshift("Apple");

console.log(fruits3);

/*
Output:
["Apple", "Banana", "Mango"]
*/


// =================================================
// 4. shift()
// Removes the first element.
// =================================================

let fruits4 = ["Apple", "Banana", "Mango"];

fruits4.shift();

console.log(fruits4);

/*
Output:
["Banana", "Mango"]
*/


// =================================================
// 5. includes()
// Checks whether an element exists.
// Returns true or false.
// =================================================

let numbers1 = [10, 20, 30, 40];

console.log(numbers1.includes(20));
console.log(numbers1.includes(100));

/*
Output:
true
false
*/


// =================================================
// 6. indexOf()
// Returns the first index.
// Returns -1 if not found.
// =================================================

let fruits5 = ["Apple", "Banana", "Mango"];

console.log(fruits5.indexOf("Banana"));
console.log(fruits5.indexOf("Orange"));

/*
Output:
1
-1
*/


// =================================================
// 7. lastIndexOf()
// Returns the last occurrence.
// =================================================

let numbers2 = [10, 20, 30, 20, 40];

console.log(numbers2.lastIndexOf(20));

/*
Output:
3
*/


// =================================================
// 8. slice()
// Returns a new array.
// Does not modify the original array.
// =================================================

let numbers3 = [10, 20, 30, 40, 50];

let result = numbers3.slice(1, 4);

console.log(result);
console.log(numbers3);

/*
Output:
[20,30,40]
[10,20,30,40,50]
*/


// =================================================
// 9. concat()
// Joins two arrays.
// =================================================

let a = [1, 2, 3];

let b = [4, 5, 6];

let c = a.concat(b);

console.log(c);

/*
Output:
[1,2,3,4,5,6]
*/


// =================================================
// 10. join()
// Converts array into string.
// =================================================

let fruits6 = ["Apple", "Banana", "Mango"];

console.log(fruits6.join());

console.log(fruits6.join("-"));

console.log(fruits6.join(" "));

/*
Output:
Apple,Banana,Mango
Apple-Banana-Mango
Apple Banana Mango
*/


// =================================================
// 11. toString()
// Converts array into string.
// =================================================

let numbers4 = [10, 20, 30];

console.log(numbers4.toString());

/*
Output:
10,20,30
*/


/*
=================================================
        INTERMEDIATE ARRAY METHODS
=================================================
*/


// =================================================
// 12. splice()
// Adds or removes elements.
// Modifies the original array.
// =================================================

let colors = ["Red", "Blue", "Green"];

colors.splice(1, 1, "Yellow");

console.log(colors);

/*
Output:
["Red","Yellow","Green"]
*/


// =================================================
// 13. reverse()
// Reverses the array.
// =================================================

let numbers5 = [10, 20, 30, 40];

numbers5.reverse();

console.log(numbers5);

/*
Output:
[40,30,20,10]
*/


// =================================================
// 14. sort()
// Sorts the array.
// =================================================

let numbers6 = [40, 10, 30, 20];

numbers6.sort((a, b) => a - b);

console.log(numbers6);

/*
Output:
[10,20,30,40]
*/


// =================================================
// 15. fill()
// Fills array with one value.
// =================================================

let numbers7 = [1, 2, 3, 4];

numbers7.fill(0);

console.log(numbers7);

/*
Output:
[0,0,0,0]
*/


// =================================================
// 16. copyWithin()
// Copies part of an array.
// =================================================

let numbers8 = [1, 2, 3, 4, 5];

numbers8.copyWithin(0, 3);

console.log(numbers8);

/*
Possible Output:
[4,5,3,4,5]
*/

