/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. WHAT IS A STRING?
// =================================================

/*
A string is a sequence of characters.

Strings are used to store text.
*/

let name = "Shashi";

console.log(name);


// =================================================
// 2. CREATING A STRING
// =================================================

// Double quotes
let city = "Bhubaneswar";

console.log(city);


// Single quotes
let state = 'Odisha';

console.log(state);


// Backticks
let country = `India`;

console.log(country);


// =================================================
// 3. STRING WITH NUMBERS
// =================================================

let phone = "1234567890";

console.log(phone);


// =================================================
// 4. STRING WITH SPACES
// =================================================

let fullName = "Shashi Bhusan Singha";

console.log(fullName);


// =================================================
// 5. EMPTY STRING
// =================================================

let message = "";

console.log(message);


// =================================================
// 6. STRING WITH SPECIAL CHARACTERS
// =================================================

let text = "Hello World!";

console.log(text);


// =================================================
// 7. CHECKING STRING TYPE
// =================================================

let username = "Shashi";

console.log(typeof username);


// =================================================
// 8. STRING CAN CONTAIN NUMBERS
// =================================================

let age = "21";

console.log(age);

console.log(typeof age);


// =================================================
// 9. NUMBER VS STRING
// =================================================

let number = 21;
let stringNumber = "21";

console.log(number);
console.log(stringNumber);

console.log(typeof number);
console.log(typeof stringNumber);


// =================================================
// 10. STRING CONCATENATION
// =================================================

let firstName = "Shashi";
let lastName = "Singha";

let fullName2 = firstName + " " + lastName;

console.log(fullName2);


// =================================================
// 11. CONCATENATING TEXT
// =================================================

let first = "Hello";
let second = "World";

console.log(first + " " + second);


// =================================================
// 12. STRING WITH A VARIABLE
// =================================================

let studentName = "Rahul";

console.log("My name is " + studentName);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a string variable called `name`
// and store your name.
// Print it.


// Q2. Create a string variable called `city`
// and store your city.
// Print it.


// Q3. Create three string variables:
// firstName
// middleName
// lastName
//
// Print the complete name using +.


// Q4. Create a string variable `country`
// and store "India".
// Print its type using typeof.


// Q5. Create a variable `age`
// and store "21" as a string.
// Print its type.


// Q6. Create a string containing:
// "I am learning JavaScript"
// Print it.


// Q7. Create two strings:
// "Hello"
// "World"
//
// Combine them and print:
// Hello World


// Q8. Create a variable `course`
// with the value "JavaScript".
//
// Print:
// I am learning JavaScript


// Q9. Create variables:
// name = "Shashi"
// age = "21"
//
// Print:
// My name is Shashi and I am 21 years old.


// Q10. Create three variables:
// language = "JavaScript"
// level = "Basic"
// topic = "Strings"
//
// Print all three values.


/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. STRING INDEX
// =================================================

/*
String indexing starts from 0.

Example:

S h a s h i
0 1 2 3 4 5
*/

let name = "Shashi";

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);


// =================================================
// 2. ACCESSING THE LAST CHARACTER
// =================================================

console.log(name[name.length - 1]);


// =================================================
// 3. STRING LENGTH
// =================================================

/*
length gives the total number of characters.
*/

console.log(name.length);


// =================================================
// 4. LENGTH WITH SPACES
// =================================================

let fullName = "Shashi Bhusan";

console.log(fullName.length);


// =================================================
// 5. ACCESSING CHARACTERS FROM A VARIABLE
// =================================================

let city = "Bhubaneswar";

console.log(city[0]);
console.log(city[4]);
console.log(city[city.length - 1]);


// =================================================
// 6. ACCESSING USING VARIABLES
// =================================================

let text = "JavaScript";

let index = 4;

console.log(text[index]);


// =================================================
// 7. FIRST CHARACTER
// =================================================

let language = "JavaScript";

console.log(language[0]);


// =================================================
// 8. LAST CHARACTER
// =================================================

console.log(language[language.length - 1]);


// =================================================
// 9. ACCESSING A CHARACTER THAT DOES NOT EXIST
// =================================================

console.log(language[100]);


// =================================================
// 10. STRING LENGTH WITH EMPTY STRING
// =================================================

let emptyString = "";

console.log(emptyString.length);


// =================================================
// 11. LOOP THROUGH A STRING
// =================================================

let word = "Hello";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}


// =================================================
// 12. REVERSE INDEX ACCESS
// =================================================

let course = "JavaScript";

console.log(course[course.length - 1]);
console.log(course[course.length - 2]);
console.log(course[course.length - 3]);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a string:
// "JavaScript"
//
// Print the first character.


// Q2. Create a string:
// "JavaScript"
//
// Print the last character.


// Q3. Create a string:
// "Bhubaneswar"
//
// Print its length.


// Q4. Create a string:
// "Programming"
//
// Print the character at index 3.


// Q5. Create a string:
// "Developer"
//
// Print the first and last character.


// Q6. Create a string:
// "JavaScript"
//
// Print the character at index 5.


// Q7. Create a string:
// "Hello World"
//
// Print its length.


// Q8. Create a string:
// "Computer"
//
// Print the characters one by one
// using a for loop.


// Q9. Create a string:
// "JavaScript"
//
// Print the last 3 characters
// using indexing.


// Q10. Create a string:
// "Shashi"
//
// Use a loop to print every character
// along with its index.
//
// Example:
// 0 S
// 1 h
// 2 a


/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. toUpperCase()
// =================================================

/*
Converts all characters into uppercase.
*/

let name = "shashi";

console.log(name.toUpperCase());


// =================================================
// 2. toLowerCase()
// =================================================

/*
Converts all characters into lowercase.
*/

let city = "BHUBANESWAR";

console.log(city.toLowerCase());


// =================================================
// 3. Original String Does Not Change
// =================================================

let language = "JavaScript";

console.log(language.toUpperCase());

console.log(language);


// =================================================
// 4. toUpperCase() WITH A VARIABLE
// =================================================

let username = "rahul";

let upperName = username.toUpperCase();

console.log(upperName);


// =================================================
// 5. toLowerCase() WITH A VARIABLE
// =================================================

let course = "JAVASCRIPT";

let lowerCourse = course.toLowerCase();

console.log(lowerCourse);


// =================================================
// 6. trim()
// =================================================

/*
trim() removes spaces from the
beginning and end of a string.
*/

let text = "   Hello World   ";

console.log(text.trim());


// =================================================
// 7. trim() WITH A VARIABLE
// =================================================

let userInput = "   Shashi   ";

let cleanInput = userInput.trim();

console.log(cleanInput);


// =================================================
// 8. trim() DOES NOT REMOVE MIDDLE SPACES
// =================================================

let fullName = "   Shashi Bhusan   ";

console.log(fullName.trim());


// =================================================
// 9. Combining Methods
// =================================================

let name2 = "   shashi   ";

console.log(name2.trim().toUpperCase());


// =================================================
// 10. Combining Methods
// =================================================

let city2 = "   BHUBANESWAR   ";

console.log(city2.trim().toLowerCase());


// =================================================
// 11. String Method With User Data
// =================================================

let input = "   JAVASCRIPT   ";

input = input.trim();

console.log(input.toLowerCase());


// =================================================
// 12. Comparing Cleaned Strings
// =================================================

let answer = " YES ";

answer = answer.trim().toLowerCase();

console.log(answer);


// =================================================
// 13. Method Chaining
// =================================================

/*
We can use multiple string methods
one after another.
*/

let word = "   JavaScript   ";

console.log(
    word.trim().toUpperCase()
);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a string:
// "javascript"
//
// Convert it to uppercase.


// Q2. Create a string:
// "JAVASCRIPT"
//
// Convert it to lowercase.


// Q3. Create a string:
// "   Hello World   "
//
// Remove the extra spaces using trim().


// Q4. Create a string:
// "   SHASHI   "
//
// Remove spaces and convert it to lowercase.


// Q5. Create a string:
// "   bhubaneswar   "
//
// Remove spaces and convert it to uppercase.


// Q6. Create a string:
// "   JavaScript   "
//
// Store the cleaned string in a new variable.
// Print it.


// Q7. Create a string:
// "   COMPUTER SCIENCE   "
//
// Remove the spaces from the beginning
// and end and convert the string to lowercase.


// Q8. Create a string:
// "   hello world   "
//
// Convert it to uppercase after trimming.


// Q9. Create two strings:
//
// firstName = "   Shashi   "
// lastName = "   Singha   "
//
// Remove the extra spaces from both.
// Convert both to uppercase.
// Print the full name.


// Q10. Create a variable:
// input = "   YES   "
//
// Remove spaces and convert it to lowercase.
//
// Expected output:
// yes


/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. includes()
// =================================================

/*
includes() checks whether a string
contains a particular value.

It returns:
true  → value exists
false → value does not exist
*/

let message = "I am learning JavaScript";

console.log(message.includes("JavaScript"));
console.log(message.includes("Python"));


// =================================================
// 2. includes() WITH A SINGLE CHARACTER
// =================================================

let name = "Shashi";

console.log(name.includes("S"));
console.log(name.includes("z"));


// =================================================
// 3. includes() IS CASE-SENSITIVE
// =================================================

let language = "JavaScript";

console.log(language.includes("Java"));
console.log(language.includes("java"));


// =================================================
// 4. startsWith()
// =================================================

/*
Checks whether a string starts
with a particular value.
*/

let city = "Bhubaneswar";

console.log(city.startsWith("Bhu"));
console.log(city.startsWith("Bhubaneswar"));
console.log(city.startsWith("aneswar"));


// =================================================
// 5. endsWith()
// =================================================

/*
Checks whether a string ends
with a particular value.
*/

let course = "JavaScript";

console.log(course.endsWith("Script"));
console.log(course.endsWith("Java"));
console.log(course.endsWith("pt"));


// =================================================
// 6. indexOf()
// =================================================

/*
indexOf() returns the index of
the first occurrence of a value.

If the value is not found,
it returns -1.
*/

let text = "JavaScript";

console.log(text.indexOf("J"));
console.log(text.indexOf("S"));
console.log(text.indexOf("a"));
console.log(text.indexOf("Python"));


// =================================================
// 7. indexOf() WITH A WORD
// =================================================

let sentence = "I am learning JavaScript";

console.log(sentence.indexOf("JavaScript"));
console.log(sentence.indexOf("learning"));


// =================================================
// 8. Searching a Character
// =================================================

let word = "banana";

console.log(word.indexOf("a"));
console.log(word.indexOf("n"));


// =================================================
// 9. Character Not Found
// =================================================

let fruit = "apple";

console.log(fruit.indexOf("z"));


// =================================================
// 10. Using Search Methods with if
// =================================================

let username = "Shashi";

if (username.includes("h")) {
    console.log("Character exists");
}


// =================================================
// 11. startsWith() WITH if
// =================================================

let fileName = "javascript.js";

if (fileName.startsWith("java")) {
    console.log("File starts with java");
}


// =================================================
// 12. endsWith() WITH if
// =================================================

if (fileName.endsWith(".js")) {
    console.log("This is a JavaScript file");
}


// =================================================
// 13. Combining trim() + Search
// =================================================

let input = "   JavaScript   ";

input = input.trim();

console.log(input.includes("Script"));


// =================================================
// 14. Combining toLowerCase() + includes()
// =================================================

let answer = "YES";

if (answer.toLowerCase().includes("yes")) {
    console.log("Correct answer");
}


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a string:
// "JavaScript is easy"
//
// Check whether it includes "JavaScript".


// Q2. Create a string:
// "I am learning Java"
//
// Check whether it includes "Python".


// Q3. Create a string:
// "Bhubaneswar"
//
// Check whether it starts with "Bhu".


// Q4. Create a string:
// "JavaScript"
//
// Check whether it starts with "Java".


// Q5. Create a string:
// "JavaScript"
//
// Check whether it ends with "Script".


// Q6. Create a string:
// "Hello World"
//
// Check whether it ends with "World".


// Q7. Create a string:
// "JavaScript"
//
// Find the index of "S".


// Q8. Create a string:
// "Programming"
//
// Find the index of "g".


// Q9. Create a string:
// "Hello World"
//
// Find the index of "World".


// Q10. Create a string:
// "JavaScript"
//
// Find the index of "Python".
// Observe the result.


// Q11. Create a string:
// "   JavaScript   "
//
// Remove the spaces and check whether
// the string includes "Script".


// Q12. Create a string:
// "   JAVASCRIPT   "
//
// Remove spaces.
// Convert it to lowercase.
// Check whether it starts with "java".


// Q13. Create a string:
// "student@gmail.com"
//
// Check whether it ends with ".com".


// Q14. Create a string:
// "https://example.com"
//
// Check whether it starts with "https".


// Q15. Create a string:
// "I love JavaScript"
//
// Check whether it includes "love"
// and "JavaScript".


// =================================================
// QUICK REVISION
// =================================================

/*
includes()
→ Checks whether value exists.

startsWith()
→ Checks beginning.

endsWith()
→ Checks ending.

indexOf()
→ Returns position/index.
→ Returns -1 if not found.
*/


// Example:

let example = "JavaScript";

console.log(example.includes("Java"));      // true
console.log(example.startsWith("Java"));    // true
console.log(example.endsWith("Script"));    // true
console.log(example.indexOf("S"));           // 4
console.log(example.indexOf("Python"));      // -1


/*
    13_Strings.js
    JAVASCRIPT STRINGS

*/

// =================================================
// 1. slice()
// =================================================

/*
slice(start, end)

Extracts a part of a string.

start → included
end   → not included
*/

let text = "JavaScript";

console.log(text.slice(0, 4));


// =================================================
// 2. slice() WITH ONE VALUE
// =================================================

let language = "JavaScript";

console.log(language.slice(4));


// =================================================
// 3. slice() WITH START AND END
// =================================================

let word = "Programming";

console.log(word.slice(0, 4));
console.log(word.slice(4, 7));


// =================================================
// 4. END INDEX IS NOT INCLUDED
// =================================================

let name = "Shashi";

console.log(name.slice(0, 3));

/*
Index:

S h a s h i
0 1 2 3 4 5

slice(0, 3)
→ 0, 1, 2
→ "Sha"
*/


// =================================================
// 5. SLICE FROM MIDDLE
// =================================================

let course = "JavaScript";

console.log(course.slice(4, 10));


// =================================================
// 6. NEGATIVE INDEX
// =================================================

/*
Negative indexes count from the end.
*/

let city = "Bhubaneswar";

console.log(city.slice(-3));


// =================================================
// 7. NEGATIVE START AND END
// =================================================

let language2 = "JavaScript";

console.log(language2.slice(-6, -1));


// =================================================
// 8. GET FIRST THREE CHARACTERS
// =================================================

let firstName = "Shashi";

console.log(firstName.slice(0, 3));


// =================================================
// 9. GET LAST THREE CHARACTERS
// =================================================

console.log(firstName.slice(-3));


// =================================================
// 10. substring()
// =================================================

/*
substring(start, end)

Works similarly to slice()
for positive indexes.
*/

let text2 = "JavaScript";

console.log(text2.substring(0, 4));


// =================================================
// 11. substring() FROM A POSITION
// =================================================

console.log(text2.substring(4));


// =================================================
// 12. substring() DOES NOT USE NEGATIVE INDEX
// =================================================

console.log(text2.substring(-3));

/*
Negative values are treated as 0.
*/


// =================================================
// 13. substr() — AWARENESS ONLY
// =================================================

/*
substr(start, length)

IMPORTANT:
substr() is a legacy/deprecated method.

Do NOT use it in new code.
Prefer slice().
*/

let text3 = "JavaScript";

console.log(text3.substr(0, 4));


// =================================================
// 14. Extracting First Name
// =================================================

let fullName = "Shashi Singha";

let first = fullName.slice(0, 6);

console.log(first);


// =================================================
// 15. Extracting Last Name
// =================================================

let last = fullName.slice(7);

console.log(last);


// =================================================
// 16. Extracting Domain
// =================================================

let email = "shashi@gmail.com";

let domain = email.slice(7);

console.log(domain);


// =================================================
// 17. Extracting File Extension
// =================================================

let fileName = "script.js";

let extension = fileName.slice(7);

console.log(extension);


// =================================================
// 18. Combining trim() + slice()
// =================================================

let input = "   JavaScript   ";

input = input.trim();

console.log(input.slice(0, 4));


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create:
// "JavaScript"
//
// Use slice() to print:
// "Java"


// Q2. Create:
// "JavaScript"
//
// Use slice() to print:
// "Script"


// Q3. Create:
// "Programming"
//
// Print the first 4 characters.


// Q4. Create:
// "Programming"
//
// Print the last 4 characters.


// Q5. Create:
// "Bhubaneswar"
//
// Print the first 5 characters.


// Q6. Create:
// "Bhubaneswar"
//
// Print the last 3 characters.


// Q7. Create:
// "JavaScript"
//
// Use slice() to print:
// "Script"


// Q8. Create:
// "Hello World"
//
// Extract:
// "Hello"


// Q9. Create:
// "Hello World"
//
// Extract:
// "World"


// Q10. Create:
// "Shashi Singha"
//
// Extract the first name.


// Q11. Create:
// "Shashi Singha"
//
// Extract the last name.


// Q12. Create:
// "student@gmail.com"
//
// Extract:
// "gmail.com"


// Q13. Create:
// "website.html"
//
// Extract:
// "html"


// Q14. Create:
// "JavaScript"
//
// Use substring() to print:
// "Java"


// Q15. Create:
// "   JavaScript   "
//
// Remove the spaces first.
// Then extract:
// "Java"