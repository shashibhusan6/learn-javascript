/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. replace()
// =================================================

/*
replace(oldValue, newValue)

Replaces the first matching value.
*/

let text = "I like JavaScript";

console.log(text.replace("JavaScript", "Java"));


// =================================================
// 2. replace() WITH A CHARACTER
// =================================================

let word = "banana";

console.log(word.replace("a", "o"));


// =================================================
// 3. replace() ONLY REPLACES FIRST MATCH
// =================================================

let word2 = "banana";

console.log(word2.replace("a", "o"));

/*
Only the first "a" is replaced.
*/


// =================================================
// 4. replaceAll()
// =================================================

/*
replaceAll(oldValue, newValue)

Replaces all matching values.
*/

let word3 = "banana";

console.log(word3.replaceAll("a", "o"));


// =================================================
// 5. replaceAll() WITH A WORD
// =================================================

let sentence = "I like JavaScript. JavaScript is easy.";

console.log(
    sentence.replaceAll("JavaScript", "Python")
);


// =================================================
// 6. replace() DOES NOT CHANGE ORIGINAL STRING
// =================================================

let language = "JavaScript";

let newLanguage = language.replace("JavaScript", "Java");

console.log(language);
console.log(newLanguage);


// =================================================
// 7. split()
// =================================================

/*
split() breaks a string into an array.
*/

let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));


// =================================================
// 8. split() WITH SPACE
// =================================================

let fullName = "Shashi Bhusan Singha";

console.log(fullName.split(" "));


// =================================================
// 9. split() WITH EACH CHARACTER
// =================================================

let name = "Shashi";

console.log(name.split(""));


// =================================================
// 10. split() WITH A WORD
// =================================================

let sentence2 = "JavaScript is easy";

console.log(sentence2.split(" "));


// =================================================
// 11. SPLIT AND ACCESS ARRAY ELEMENT
// =================================================

let colors = "Red,Green,Blue";

let colorArray = colors.split(",");

console.log(colorArray);

console.log(colorArray[0]);
console.log(colorArray[1]);
console.log(colorArray[2]);


// =================================================
// 12. STRING TO ARRAY
// =================================================

let numbers = "10,20,30,40";

let numberArray = numbers.split(",");

console.log(numberArray);


// =================================================
// 13. REPLACE + SPLIT
// =================================================

let data = "JavaScript,Java,Python";

let updatedData = data.replace("Java", "C++");

console.log(updatedData);

console.log(updatedData.split(","));


// =================================================
// 14. TRIM + REPLACE
// =================================================

let input = "   Hello World   ";

input = input.trim();

console.log(input.replace("World", "JavaScript"));


// =================================================
// 15. LOWERCASE + REPLACE
// =================================================

let message = "I LIKE JAVASCRIPT";

message = message.toLowerCase();

console.log(message.replace("javascript", "java"));


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create:
// "I like JavaScript"
//
// Replace "JavaScript" with "Java".


// Q2. Create:
// "I love JavaScript"
//
// Replace "JavaScript" with "Python".


// Q3. Create:
// "banana"
//
// Replace the first "a" with "o".


// Q4. Create:
// "banana"
//
// Replace all "a" with "o".


// Q5. Create:
// "JavaScript JavaScript JavaScript"
//
// Replace all "JavaScript" with "Python".


// Q6. Create:
// "Apple,Banana,Mango"
//
// Convert it into an array using split().


// Q7. Create:
// "Red Green Blue"
//
// Convert it into an array.


// Q8. Create:
// "Shashi Bhusan Singha"
//
// Split it into separate words.


// Q9. Create:
// "JavaScript"
//
// Split every character into an array.


// Q10. Create:
// "10,20,30,40,50"
//
// Convert it into an array.


// Q11. Create:
// "HTML,CSS,JavaScript"
//
// Convert it into an array.
// Print the second element.


// Q12. Create:
// "I am learning JavaScript"
//
// Split it into separate words.
// Print the first word.


// Q13. Create:
// "I like Java. Java is easy."
//
// Replace all "Java" with "JavaScript".


// Q14. Create:
// "   I like JavaScript   "
//
// Remove the extra spaces.
// Then replace "JavaScript" with "Python".


// Q15. Create:
// "apple-orange-banana"
//
// Split the string using "-".
// Print the resulting array.