/*
=================================================
        11_Arrays_Easy.js
        EASY LEVEL
=================================================
*/

// Q1. Create an array of 5 numbers and print it.

// Q2. Create an array of 5 names and print it.

// Q3. Print the first element of an array.

// Q4. Print the last element of an array.

// Q5. Find the length of an array.

// Q6. Change the second element of an array.

// Q7. Add an element at the end using push().

// Q8. Remove the last element using pop().

// Q9. Add an element at the beginning using unshift().

// Q10. Remove the first element using shift().

// Q11. Print all elements of an array using a for loop.

// Q12. Print all elements of an array in reverse order.

// Q13. Find the sum of all elements in an array.

// Q14. Find the average of all elements in an array.

// Q15. Count the total number of elements in an array.



/*
=================================================
        11_Arrays_Medium.js
        MEDIUM LEVEL
=================================================
*/

// Q16. Find the largest element in an array.

// Q17. Find the smallest element in an array.

// Q18. Count how many even numbers are present in an array.

// Q19. Count how many odd numbers are present in an array.

// Q20. Count positive numbers in an array.

// Q21. Count negative numbers in an array.

// Q22. Count zeros in an array.

// Q23. Search for a given element in an array (Linear Search).

// Q24. Check whether a given element exists in the array.

// Q25. Find the index of a given element.

// Q26. Print all even numbers from the array.

// Q27. Print all odd numbers from the array.

// Q28. Find the multiplication (product) of all array elements.

// Q29. Copy one array into another array.

// Q30. Merge two arrays into one array.





/*
=================================================
        11_Arrays_Hard.js
        HARD LEVEL
=================================================
*/

// Q31. Reverse an array without using reverse().

// Q32. Check whether an array is sorted in ascending order.

// Q33. Find the second largest element in an array.

// Q34. Find the second smallest element in an array.

// Q35. Count how many times a given element appears in an array.

// Q36. Remove all duplicate elements from an array (without using Set).

// Q37. Find the maximum difference between any two elements.

// Q38. Move all zero elements to the end of the array.

// Q39. Rotate the array one position to the left.

// Q40. Rotate the array one position to the right.

// Q41. Find the common elements between two arrays.

// Q42. Find the missing number from an array containing numbers from 1 to N.

// Q43. Separate even and odd numbers into two different arrays.

// Q44. Find all pairs of elements whose sum is equal to a given target.

// Q45. Find the largest and smallest element in a single traversal of the array.



/*
=================================================
        11_Arrays_Easy.js
        EASY LEVEL - ANSWERS
=================================================
*/


// =================================================
// Q1. Create an array of 5 numbers and print it.
// =================================================

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);


// =================================================
// Q2. Create an array of 5 names and print it.
// =================================================

let names = ["Shashi", "Rahul", "Aman", "Rohit", "Priya"];

console.log(names);


// =================================================
// Q3. Print the first element of an array.
// =================================================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]);


// =================================================
// Q4. Print the last element of an array.
// =================================================

let colors = ["Red", "Blue", "Green", "Yellow"];

console.log(colors[colors.length - 1]);


// =================================================
// Q5. Find the length of an array.
// =================================================

let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];

console.log(cities.length);


// =================================================
// Q6. Change the second element of an array.
// =================================================

let animals = ["Dog", "Cat", "Cow", "Horse"];

animals[1] = "Lion";

console.log(animals);


// =================================================
// Q7. Add an element at the end using push().
// =================================================

let languages = ["Java", "Python", "JavaScript"];

languages.push("C++");

console.log(languages);


// =================================================
// Q8. Remove the last element using pop().
// =================================================

let cars = ["BMW", "Audi", "Tesla"];

cars.pop();

console.log(cars);


// =================================================
// Q9. Add an element at the beginning using unshift().
// =================================================

let flowers = ["Rose", "Lotus", "Lily"];

flowers.unshift("Sunflower");

console.log(flowers);


// =================================================
// Q10. Remove the first element using shift().
// =================================================

let games = ["Cricket", "Football", "Hockey"];

games.shift();

console.log(games);


// =================================================
// Q11. Print all elements of an array using a for loop.
// =================================================

let marks = [85, 90, 75, 88, 92];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


// =================================================
// Q12. Print all elements of an array in reverse order.
// =================================================

let values = [10, 20, 30, 40, 50];

for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
}


// =================================================
// Q13. Find the sum of all elements in an array.
// =================================================

let nums = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log("Sum =", sum);


// =================================================
// Q14. Find the average of all elements in an array.
// =================================================

let scores = [80, 90, 70, 60, 100];

let total = 0;

for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}

let average = total / scores.length;

console.log("Average =", average);


// =================================================
// Q15. Count the total number of elements in an array.
// =================================================

let subjects = ["Java", "DSA", "DBMS", "OS", "CN", "SQL"];

let count = 0;

for (let i = 0; i < subjects.length; i++) {
    count++;
}

console.log("Total Elements =", count);




/*
=================================================
        11_Arrays_Medium.js
        MEDIUM LEVEL - ANSWERS
=================================================
*/


// =================================================
// Q16. Find the largest element in an array.
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
// Q17. Find the smallest element in an array.
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
// Q18. Count how many even numbers are present in an array.
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
// Q19. Count how many odd numbers are present in an array.
// =================================================

let numbers4 = [10, 15, 20, 25, 30];

let oddCount = 0;

for (let i = 0; i < numbers4.length; i++) {

    if (numbers4[i] % 2 !== 0) {
        oddCount++;
    }

}

console.log("Odd Count =", oddCount);


// =================================================
// Q20. Count positive numbers in an array.
// =================================================

let numbers5 = [-5, 10, -8, 25, 0, 15];

let positiveCount = 0;

for (let i = 0; i < numbers5.length; i++) {

    if (numbers5[i] > 0) {
        positiveCount++;
    }

}

console.log("Positive Count =", positiveCount);


// =================================================
// Q21. Count negative numbers in an array.
// =================================================

let numbers6 = [-5, 10, -8, 25, 0, 15];

let negativeCount = 0;

for (let i = 0; i < numbers6.length; i++) {

    if (numbers6[i] < 0) {
        negativeCount++;
    }

}

console.log("Negative Count =", negativeCount);


// =================================================
// Q22. Count zeros in an array.
// =================================================

let numbers7 = [0, 10, 0, 20, 30, 0];

let zeroCount = 0;

for (let i = 0; i < numbers7.length; i++) {

    if (numbers7[i] === 0) {
        zeroCount++;
    }

}

console.log("Zero Count =", zeroCount);


// =================================================
// Q23. Search for a given element in an array
// (Linear Search).
// =================================================

let numbers8 = [10, 20, 30, 40, 50];

let target = 30;

let found = false;

for (let i = 0; i < numbers8.length; i++) {

    if (numbers8[i] === target) {
        found = true;
        break;
    }

}

console.log(found);


// =================================================
// Q24. Check whether a given element exists
// in the array.
// =================================================

let fruits = ["Apple", "Banana", "Mango"];

let item = "Banana";

let exists = false;

for (let i = 0; i < fruits.length; i++) {

    if (fruits[i] === item) {
        exists = true;
        break;
    }

}

console.log(exists);


// =================================================
// Q25. Find the index of a given element.
// =================================================

let numbers9 = [10, 20, 30, 40, 50];

let search = 40;

let index = -1;

for (let i = 0; i < numbers9.length; i++) {

    if (numbers9[i] === search) {
        index = i;
        break;
    }

}

console.log("Index =", index);


// =================================================
// Q26. Print all even numbers from the array.
// =================================================

let numbers10 = [10, 15, 20, 25, 30, 35];

for (let i = 0; i < numbers10.length; i++) {

    if (numbers10[i] % 2 === 0) {
        console.log(numbers10[i]);
    }

}


// =================================================
// Q27. Print all odd numbers from the array.
// =================================================

let numbers11 = [10, 15, 20, 25, 30, 35];

for (let i = 0; i < numbers11.length; i++) {

    if (numbers11[i] % 2 !== 0) {
        console.log(numbers11[i]);
    }

}


// =================================================
// Q28. Find the multiplication (product)
// of all array elements.
// =================================================

let numbers12 = [2, 3, 4, 5];

let product = 1;

for (let i = 0; i < numbers12.length; i++) {

    product *= numbers12[i];

}

console.log("Product =", product);


// =================================================
// Q29. Copy one array into another array.
// =================================================

let original = [10, 20, 30, 40];

let copy = [];

for (let i = 0; i < original.length; i++) {

    copy.push(original[i]);

}

console.log(copy);


// =================================================
// Q30. Merge two arrays into one array.
// =================================================

let arr1 = [10, 20, 30];

let arr2 = [40, 50, 60];

let merged = [];

for (let i = 0; i < arr1.length; i++) {

    merged.push(arr1[i]);

}

for (let i = 0; i < arr2.length; i++) {

    merged.push(arr2[i]);

}

console.log(merged);

