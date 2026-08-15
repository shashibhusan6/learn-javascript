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