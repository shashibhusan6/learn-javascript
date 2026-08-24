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


/*
    14_DOM.js

    DOM BASICS

    Topics:
    1. DOM nodes
    2. Elements
    3. Parent and child relationship
    4. DOM tree understanding
    5. Basic document properties
*/


// =================================================
// 1. DOM NODES
// =================================================

/*
Everything in the DOM is represented as a node.

Common types:

1. Document Node
2. Element Node
3. Text Node
4. Attribute Node
*/


// =================================================
// 2. ELEMENT NODE
// =================================================

/*
HTML elements such as:

<h1>
<p>
<div>
<button>

are represented as elements in the DOM.
*/


// =================================================
// 3. TEXT NODE
// =================================================

/*
The text inside an HTML element
is also represented in the DOM.

Example:

<p>Hello</p>

<p> → Element
"Hello" → Text
*/


// =================================================
// 4. PARENT AND CHILD
// =================================================

/*
DOM elements have relationships.

Example:

<body>

    <h1>Hello</h1>

    <p>Welcome</p>

</body>

Here:

body → Parent
h1   → Child
p    → Child
*/


// =================================================
// 5. DOM TREE EXAMPLE
// =================================================

/*

HTML:

<html>

    <head>
        <title>My Page</title>
    </head>

    <body>

        <h1>Hello</h1>

        <p>Welcome</p>

    </body>

</html>


DOM Tree:

                    document
                        |
                       html
                    /       \
                 head       body
                  |        /    \
               title      h1      p
                           |      |
                         Hello  Welcome

*/


// =================================================
// 6. document.title
// =================================================

console.log(document.title);


// =================================================
// 7. document.body
// =================================================

console.log(document.body);


// =================================================
// 8. document.head
// =================================================

console.log(document.head);


// =================================================
// 9. document.documentElement
// =================================================

console.log(document.documentElement);


// =================================================
// 10. document.URL
// =================================================

/*
document.URL gives the URL
of the current webpage.
*/

console.log(document.URL);


// =================================================
// 11. document.domain
// =================================================

/*
document.domain gives the domain
of the current webpage.

This is mainly for understanding
the document object.
*/

console.log(document.domain);


// =================================================
// 12. document.characterSet
// =================================================

/*
Returns the character encoding
used by the document.
*/

console.log(document.characterSet);


// =================================================
// 13. document.readyState
// =================================================

/*
Shows the loading state of the document.

Common values:

"loading"
"interactive"
"complete"
*/

console.log(document.readyState);


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Print document.URL.


// Q2. Print document.domain.


// Q3. Print document.characterSet.


// Q4. Print document.readyState.


// Q5. Explain in comments:
// What is an element node?


// Q6. Explain in comments:
// What is a text node?


// Q7. In this HTML:
//
// <body>
//     <h1>Hello</h1>
//     <p>Welcome</p>
// </body>
//
// Identify:
// Parent element
// Child elements


// Q8. Draw the DOM tree for:
//
// <html>
//     <head>
//         <title>JavaScript</title>
//     </head>
//     <body>
//         <h1>Hello</h1>
//         <p>Learning DOM</p>
//     </body>
// </html>


// Q9. What is the difference between:
// document
// document.documentElement


// Q10. What is the difference between:
// an element node
// a text node


// =================================================
// QUICK REVISION
// =================================================

/*

DOM
↓
Document Object Model

Node
↓
A part of the DOM tree.

Element Node
↓
<h1>, <p>, <div>, <button>, etc.

Text Node
↓
Text inside an element.

Parent
↓
Element containing another element.

Child
↓
Element inside another element.


Important properties:

document
document.title
document.head
document.body
document.documentElement
document.URL
document.domain
document.characterSet
document.readyState

*/

