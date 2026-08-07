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
