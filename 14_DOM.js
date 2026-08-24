/*
    14_DOM.js

    DOM BASICS

    Topics:
    1. What is DOM?
    2. What is document?
    3. HTML → DOM
    4. DOM Tree
    5. Basic document properties
*/


// =================================================
// 1. WHAT IS DOM?
// =================================================

/*
DOM = Document Object Model

The browser converts an HTML document
into a tree-like structure of objects.

JavaScript can then use the DOM
to interact with the HTML page.

Example:

HTML
  ↓
Browser
  ↓
DOM
  ↓
JavaScript
*/


// =================================================
// 2. THE document OBJECT
// =================================================

/*
The "document" object represents
the current HTML page.

JavaScript uses "document" to
access and modify the webpage.
*/

console.log(document);


// =================================================
// 3. document.title
// =================================================

/*
document.title gives the title
of the current HTML page.
*/

console.log(document.title);


// =================================================
// 4. CHANGING document.title
// =================================================

/*
We can also change the title
using JavaScript.
*/

document.title = "JavaScript DOM";

console.log(document.title);


// =================================================
// 5. document.body
// =================================================

/*
document.body represents the
<body> element of the HTML page.
*/

console.log(document.body);


// =================================================
// 6. document.head
// =================================================

/*
document.head represents the
<head> element.
*/

console.log(document.head);


// =================================================
// 7. document.documentElement
// =================================================

/*
document.documentElement represents
the <html> element.
*/

console.log(document.documentElement);


// =================================================
// 8. BASIC HTML STRUCTURE
// =================================================

/*
Example HTML:

<html>

    <head>
        <title>My Page</title>
    </head>

    <body>

        <h1>Hello</h1>

        <p>Welcome to JavaScript</p>

    </body>

</html>
*/


// =================================================
// 9. DOM TREE
// =================================================

/*
The above HTML can be understood
as a DOM tree:

                document
                    |
                   html
                 /      \
              head      body
               |        /   \
            title      h1    p

document
   ↓
html
   ↓
head + body
   ↓
elements inside them
*/


// =================================================
// 10. BASIC DOM INFORMATION
// =================================================

console.log("Document:", document);

console.log("Title:", document.title);

console.log("Head:", document.head);

console.log("Body:", document.body);

console.log("HTML:", document.documentElement);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Print the document object.


// Q2. Print the current page title.


// Q3. Change the page title to:
// "My First DOM Page"


// Q4. Print document.body.


// Q5. Print document.head.


// Q6. Print document.documentElement.


// Q7. Change the page title to your name.


// Q8. Print the title after changing it.


// Q9. Print document.body and observe
// the elements inside it.


// Q10. Draw the DOM tree for:
//
// <html>
//     <head>
//         <title>My Page</title>
//     </head>
//     <body>
//         <h1>Hello</h1>
//         <p>Welcome</p>
//     </body>
// </html>


// =================================================
// QUICK REVISION
// =================================================

/*
DOM
→ Document Object Model

document
→ Represents the current webpage.

document.title
→ Represents the page title.

document.head
→ Represents <head>.

document.body
→ Represents <body>.

document.documentElement
→ Represents <html>.
*/

