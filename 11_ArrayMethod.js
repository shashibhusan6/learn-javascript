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




/*
=================================================
        ITERATION METHODS
=================================================
*/


// =================================================
// 17. forEach()
// Executes a function for each element.
// =================================================

let nums1 = [10, 20, 30];

nums1.forEach(function(value) {
    console.log(value);
});


// =================================================
// 18. map()
// Creates a new array.
// =================================================

let nums2 = [1, 2, 3];

let square = nums2.map(function(value) {
    return value * value;
});

console.log(square);

/*
Output:
[1,4,9]
*/


// =================================================
// 19. filter()
// Returns matching elements.
// =================================================

let nums3 = [10, 15, 20, 25, 30];

let even = nums3.filter(function(value) {
    return value % 2 === 0;
});

console.log(even);

/*
Output:
[10,20,30]
*/


// =================================================
// 20. find()
// Returns first matching element.
// =================================================

let nums4 = [10, 20, 30, 40];

let value = nums4.find(function(num) {
    return num > 20;
});

console.log(value);

/*
Output:
30
*/


// =================================================
// 21. findIndex()
// Returns first matching index.
// =================================================

let nums5 = [10, 20, 30, 40];

let index = nums5.findIndex(function(num) {
    return num > 20;
});

console.log(index);

/*
Output:
2
*/


// =================================================
// 22. some()
// Returns true if any element matches.
// =================================================

let nums6 = [5, 10, 15];

console.log(nums6.some(num => num > 12));

/*
Output:
true
*/


// =================================================
// 23. every()
// Returns true if all elements match.
// =================================================

let nums7 = [2, 4, 6];

console.log(nums7.every(num => num % 2 === 0));

/*
Output:
true
*/


// =================================================
// 24. reduce()
// Reduces array to one value.
// =================================================

let nums8 = [10, 20, 30];

let total = nums8.reduce(function(sum, value) {
    return sum + value;
}, 0);

console.log(total);

/*
Output:
60
*/


// =================================================
// 25. reduceRight()
// Same as reduce() but from right.
// =================================================

let letters = ["A", "B", "C"];

console.log(letters.reduceRight((a, b) => a + b));

/*
Output:
CBA
*/


// =================================================
// 26. flat()
// Flattens nested arrays.
// =================================================

let arr1 = [1, 2, [3, 4]];

console.log(arr1.flat());

/*
Output:
[1,2,3,4]
*/


// =================================================
// 27. flatMap()
// map() + flat()
// =================================================

let arr2 = [1, 2, 3];

let result2 = arr2.flatMap(num => [num, num * 2]);

console.log(result2);

/*
Output:
[1,2,2,4,3,6]
*/


/*
=================================================
        ARRAY CREATION METHODS
=================================================
*/


// =================================================
// 28. Array.of()
// =================================================

console.log(Array.of(10, 20, 30));


// =================================================
// 29. Array.from()
// =================================================

console.log(Array.from("HELLO"));

/*
Output:
["H","E","L","L","O"]
*/


// =================================================
// 30. Array.isArray()
// =================================================

console.log(Array.isArray([1, 2, 3]));

console.log(Array.isArray("Hello"));

/*
Output:
true
false
*/


/*
=================================================
        ES6 ARRAY FEATURES
=================================================
*/


// =================================================
// 31. Spread Operator (...)
// =================================================

let first = [1, 2, 3];

let second = [...first, 4, 5];

console.log(second);

/*
Output:
[1,2,3,4,5]
*/


// =================================================
// 32. Rest Operator (...)
// =================================================

function display(...numbers) {
    console.log(numbers);
}

display(10, 20, 30, 40);

/*
Output:
[10,20,30,40]
*/


// =================================================
// 33. Array Destructuring
// =================================================

let values = [100, 200, 300];

let [x, y, z] = values;

console.log(x);
console.log(y);
console.log(z);

/*
Output:
100
200
300
*/


/*
=================================================
            QUICK REVISION
=================================================

push()          -> Add at end
pop()           -> Remove last
unshift()       -> Add at beginning
shift()         -> Remove first
includes()      -> Check existence
indexOf()       -> First index
lastIndexOf()   -> Last index
slice()         -> Copy portion
splice()        -> Add/Remove elements
concat()        -> Merge arrays
join()          -> Array → String
toString()      -> Array → String
reverse()       -> Reverse array
sort()          -> Sort array
fill()          -> Fill values
copyWithin()    -> Copy elements
forEach()       -> Iterate
map()           -> Transform
filter()        -> Filter elements
find()          -> First match
findIndex()     -> Index of first match
some()          -> Any match?
every()         -> All match?
reduce()        -> Single value
reduceRight()   -> Reduce from right
flat()          -> Flatten array
flatMap()       -> map() + flat()
Array.of()      -> Create array
Array.from()    -> Create from iterable
Array.isArray() -> Check array
Spread (...)    -> Expand elements
Rest (...)      -> Collect elements
Destructuring   -> Extract values

=================================================
            END OF FILE
=================================================
*/