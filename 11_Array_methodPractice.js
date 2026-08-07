/*
=================================================
        11_ArrayMethods_Easy.js
        ARRAY METHODS PRACTICE
              EASY LEVEL
=================================================
*/

// Q1. Create an array and add one element using push().

// Q2. Add two elements at the end using push().

// Q3. Remove the last element using pop().

// Q4. Add one element at the beginning using unshift().

// Q5. Remove the first element using shift().

// Q6. Check whether 50 exists in an array using includes().

// Q7. Check whether "Java" exists in an array using includes().

// Q8. Find the index of 30 using indexOf().

// Q9. Find the last occurrence of 20 using lastIndexOf().

// Q10. Extract the first three elements using slice().

// Q11. Extract the last two elements using slice().

// Q12. Merge two arrays using concat().

// Q13. Convert an array into a comma-separated string using join().

// Q14. Convert an array into a string using toString().

// Q15. Perform push(), pop(), shift(), and unshift() on the same array and print the final array.





/*
=================================================
        11_ArrayMethods_Medium.js
        ARRAY METHODS PRACTICE
             MEDIUM LEVEL
=================================================
*/

// Q16. Replace the second element using splice().

// Q17. Remove two elements starting from index 2 using splice().

// Q18. Insert "Orange" at index 1 using splice().

// Q19. Reverse an array using reverse().

// Q20. Sort numbers in ascending order using sort().

// Q21. Sort numbers in descending order using sort().

// Q22. Fill an array with 0 using fill().

// Q23. Fill only the first three elements with 100 using fill().

// Q24. Copy the last two elements to the beginning using copyWithin().

// Q25. Print every element using forEach().

// Q26. Double every number using map().

// Q27. Convert all names into uppercase using map().

// Q28. Get all even numbers using filter().

// Q29. Get all odd numbers using filter().

// Q30. Create a new array containing squares of all numbers using map().




/*
=================================================
        11_ArrayMethods_Hard.js
        ARRAY METHODS PRACTICE
              HARD LEVEL
=================================================
*/

// Q31. Find the first number greater than 50 using find().

// Q32. Find the index of the first even number using findIndex().

// Q33. Check if at least one number is negative using some().

// Q34. Check if every number is positive using every().

// Q35. Find the sum of all array elements using reduce().

// Q36. Find the product of all array elements using reduce().

// Q37. Flatten a nested array using flat().

// Q38. Use flatMap() to create an array containing each number and its double.

// Q39. Create an array using Array.of().

// Q40. Convert the string "PLACEMENT" into an array using Array.from().

// Q41. Check whether a variable is an array using Array.isArray().

// Q42. Copy an array using the spread operator (...).

// Q43. Merge three arrays using the spread operator (...).

// Q44. Swap two variables using array destructuring.

// Q45. Use rest (...) in array destructuring to store the remaining elements.






/*
=================================================
        11_ArrayMethods_Easy.js
        ARRAY METHODS PRACTICE
              EASY LEVEL
=================================================
*/

// Q1. Create an array and add one element using push().

let arr1 = [10, 20, 30];
arr1.push(40);
console.log("Q1:", arr1);

// -------------------------------------------------

// Q2. Add two elements at the end using push().

let arr2 = [1, 2, 3];
arr2.push(4, 5);
console.log("Q2:", arr2);

// -------------------------------------------------

// Q3. Remove the last element using pop().

let arr3 = [100, 200, 300];
arr3.pop();
console.log("Q3:", arr3);

// -------------------------------------------------

// Q4. Add one element at the beginning using unshift().

let arr4 = [20, 30, 40];
arr4.unshift(10);
console.log("Q4:", arr4);

// -------------------------------------------------

// Q5. Remove the first element using shift().

let arr5 = [10, 20, 30, 40];
arr5.shift();
console.log("Q5:", arr5);

// -------------------------------------------------

// Q6. Check whether 50 exists in an array using includes().

let arr6 = [10, 20, 30, 40, 50];
console.log("Q6:", arr6.includes(50));

// -------------------------------------------------

// Q7. Check whether "Java" exists in an array using includes().

let arr7 = ["Python", "Java", "JavaScript", "C++"];
console.log("Q7:", arr7.includes("Java"));

// -------------------------------------------------

// Q8. Find the index of 30 using indexOf().

let arr8 = [10, 20, 30, 40, 50];
console.log("Q8:", arr8.indexOf(30));

// -------------------------------------------------

// Q9. Find the last occurrence of 20 using lastIndexOf().

let arr9 = [10, 20, 30, 20, 40, 20];
console.log("Q9:", arr9.lastIndexOf(20));

// -------------------------------------------------

// Q10. Extract the first three elements using slice().

let arr10 = [10, 20, 30, 40, 50];
let firstThree = arr10.slice(0, 3);
console.log("Q10:", firstThree);

// -------------------------------------------------

// Q11. Extract the last two elements using slice().

let arr11 = [10, 20, 30, 40, 50];
let lastTwo = arr11.slice(-2);
console.log("Q11:", lastTwo);

// -------------------------------------------------

// Q12. Merge two arrays using concat().

let arr12A = [1, 2, 3];
let arr12B = [4, 5, 6];
let merged = arr12A.concat(arr12B);
console.log("Q12:", merged);

// -------------------------------------------------

// Q13. Convert an array into a comma-separated string using join().

let arr13 = ["HTML", "CSS", "JavaScript"];
let joined = arr13.join(",");
console.log("Q13:", joined);

// -------------------------------------------------

// Q14. Convert an array into a string using toString().

let arr14 = [10, 20, 30, 40];
let str = arr14.toString();
console.log("Q14:", str);

// -------------------------------------------------

// Q15. Perform push(), pop(), shift(), and unshift() on the same array and print the final array.

let arr15 = [20, 30, 40];

arr15.push(50);      // [20,30,40,50]
arr15.pop();         // [20,30,40]
arr15.shift();       // [30,40]
arr15.unshift(10);   // [10,30,40]

console.log("Q15:", arr15);

// -------------------------------------------------







/*
=================================================
        11_ArrayMethods_Medium.js
        ARRAY METHODS PRACTICE
             MEDIUM LEVEL
=================================================
*/

// Q16. Replace the second element using splice().

let arr16 = [10, 20, 30, 40];
arr16.splice(1, 1, 25);
console.log("Q16:", arr16);

// -------------------------------------------------

// Q17. Remove two elements starting from index 2 using splice().

let arr17 = [10, 20, 30, 40, 50];
arr17.splice(2, 2);
console.log("Q17:", arr17);

// -------------------------------------------------

// Q18. Insert "Orange" at index 1 using splice().

let arr18 = ["Apple", "Banana", "Mango"];
arr18.splice(1, 0, "Orange");
console.log("Q18:", arr18);

// -------------------------------------------------

// Q19. Reverse an array using reverse().

let arr19 = [1, 2, 3, 4, 5];
arr19.reverse();
console.log("Q19:", arr19);

// -------------------------------------------------

// Q20. Sort numbers in ascending order using sort().

let arr20 = [50, 10, 40, 20, 30];
arr20.sort((a, b) => a - b);
console.log("Q20:", arr20);

// -------------------------------------------------

// Q21. Sort numbers in descending order using sort().

let arr21 = [50, 10, 40, 20, 30];
arr21.sort((a, b) => b - a);
console.log("Q21:", arr21);

// -------------------------------------------------

// Q22. Fill an array with 0 using fill().

let arr22 = [1, 2, 3, 4, 5];
arr22.fill(0);
console.log("Q22:", arr22);

// -------------------------------------------------

// Q23. Fill only the first three elements with 100 using fill().

let arr23 = [10, 20, 30, 40, 50];
arr23.fill(100, 0, 3);
console.log("Q23:", arr23);

// -------------------------------------------------

// Q24. Copy the last two elements to the beginning using copyWithin().

let arr24 = [10, 20, 30, 40, 50];
arr24.copyWithin(0, 3);
console.log("Q24:", arr24);

// -------------------------------------------------

// Q25. Print every element using forEach().

let arr25 = [10, 20, 30, 40];

console.log("Q25:");
arr25.forEach((value) => {
    console.log(value);
});

// -------------------------------------------------

// Q26. Double every number using map().

let arr26 = [1, 2, 3, 4, 5];
let doubled = arr26.map((num) => num * 2);
console.log("Q26:", doubled);

// -------------------------------------------------

// Q27. Convert all names into uppercase using map().

let arr27 = ["java", "python", "javascript"];
let upperNames = arr27.map((name) => name.toUpperCase());
console.log("Q27:", upperNames);

// -------------------------------------------------

// Q28. Get all even numbers using filter().

let arr28 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = arr28.filter((num) => num % 2 === 0);
console.log("Q28:", evenNumbers);

// -------------------------------------------------

// Q29. Get all odd numbers using filter().

let arr29 = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNumbers = arr29.filter((num) => num % 2 !== 0);
console.log("Q29:", oddNumbers);

// -------------------------------------------------

// Q30. Create a new array containing squares of all numbers using map().

let arr30 = [1, 2, 3, 4, 5];
let squares = arr30.map((num) => num * num);
console.log("Q30:", squares);

// -------------------------------------------------




/*
=================================================
        11_ArrayMethods_Hard.js
        ARRAY METHODS PRACTICE
              HARD LEVEL
=================================================
*/

// Q31. Find the first number greater than 50 using find().

let arr31 = [10, 25, 45, 60, 80];
let firstGreater = arr31.find(num => num > 50);
console.log("Q31:", firstGreater);

// -------------------------------------------------

// Q32. Find the index of the first even number using findIndex().

let arr32 = [11, 13, 15, 18, 20];
let evenIndex = arr32.findIndex(num => num % 2 === 0);
console.log("Q32:", evenIndex);

// -------------------------------------------------

// Q33. Check if at least one number is negative using some().

let arr33 = [10, 20, -5, 40];
let hasNegative = arr33.some(num => num < 0);
console.log("Q33:", hasNegative);

// -------------------------------------------------

// Q34. Check if every number is positive using every().

let arr34 = [5, 10, 15, 20];
let allPositive = arr34.every(num => num > 0);
console.log("Q34:", allPositive);

// -------------------------------------------------

// Q35. Find the sum of all array elements using reduce().

let arr35 = [10, 20, 30, 40];
let sum = arr35.reduce((total, num) => total + num, 0);
console.log("Q35:", sum);

// -------------------------------------------------

// Q36. Find the product of all array elements using reduce().

let arr36 = [2, 3, 4, 5];
let product = arr36.reduce((total, num) => total * num, 1);
console.log("Q36:", product);

// -------------------------------------------------

// Q37. Flatten a nested array using flat().

let arr37 = [1, 2, [3, 4], [5, 6]];
let flatArray = arr37.flat();
console.log("Q37:", flatArray);

// -------------------------------------------------

// Q38. Use flatMap() to create an array containing each number and its double.

let arr38 = [1, 2, 3, 4];
let result38 = arr38.flatMap(num => [num, num * 2]);
console.log("Q38:", result38);

// -------------------------------------------------

// Q39. Create an array using Array.of().

let arr39 = Array.of(10, 20, 30, 40, 50);
console.log("Q39:", arr39);

// -------------------------------------------------

// Q40. Convert the string "PLACEMENT" into an array using Array.from().

let arr40 = Array.from("PLACEMENT");
console.log("Q40:", arr40);

// -------------------------------------------------

// Q41. Check whether a variable is an array using Array.isArray().

let arr41 = [1, 2, 3];
console.log("Q41:", Array.isArray(arr41));

// -------------------------------------------------

// Q42. Copy an array using the spread operator (...).

let arr42 = [10, 20, 30];
let copyArr = [...arr42];
console.log("Q42:", copyArr);

// -------------------------------------------------

// Q43. Merge three arrays using the spread operator (...).

let arr43A = [1, 2];
let arr43B = [3, 4];
let arr43C = [5, 6];

let mergedArray = [...arr43A, ...arr43B, ...arr43C];
console.log("Q43:", mergedArray);

// -------------------------------------------------

// Q44. Swap two variables using array destructuring.

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("Q44:");
console.log("a =", a);
console.log("b =", b);

// -------------------------------------------------

// Q45. Use rest (...) in array destructuring to store the remaining elements.

let arr45 = [10, 20, 30, 40, 50];

let [first, second, ...remaining] = arr45;

console.log("Q45:");
console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);

// -------------------------------------------------