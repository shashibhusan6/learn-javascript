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


/*
    14_DOM.js


    Topics:
    1. getElementById()
    2. getElementsByClassName()
    3. getElementsByTagName()
    4. Basic practice
*/


// =================================================
// HTML USED FOR EXAMPLES
// =================================================

/*

<body>

    <h1 id="title">Hello JavaScript</h1>

    <p class="text">Learning DOM</p>
    <p class="text">Learning JavaScript</p>

    <div class="box">Box 1</div>
    <div class="box">Box 2</div>

</body>

*/


// =================================================
// 1. getElementById()
// =================================================

/*
getElementById() selects ONE element
using its id.

Syntax:

document.getElementById("id");
*/


let title = document.getElementById("title");

console.log(title);


// =================================================
// 2. Accessing the Selected Element
// =================================================

/*
Once an element is selected,
we can store it inside a variable
and use that variable.
*/

let heading = document.getElementById("title");

console.log(heading);


// =================================================
// 3. getElementsByClassName()
// =================================================

/*
getElementsByClassName()
selects elements using their class name.

It can return multiple elements.

Syntax:

document.getElementsByClassName("className");
*/

let textElements =
    document.getElementsByClassName("text");

console.log(textElements);


// =================================================
// 4. Accessing an Element from
// getElementsByClassName()
// =================================================

/*
Because there can be multiple elements,
we can access them using an index.
*/

console.log(textElements[0]);

console.log(textElements[1]);


// =================================================
// 5. getElementsByTagName()
// =================================================

/*
getElementsByTagName()
selects elements using their HTML tag.

Example:

document.getElementsByTagName("p");
*/

let paragraphs =
    document.getElementsByTagName("p");

console.log(paragraphs);


// =================================================
// 6. Accessing Elements by Index
// =================================================

console.log(paragraphs[0]);

console.log(paragraphs[1]);


// =================================================
// 7. Selecting All DIV Elements
// =================================================

let divs =
    document.getElementsByTagName("div");

console.log(divs);


// =================================================
// 8. Selecting the First DIV
// =================================================

console.log(divs[0]);


// =================================================
// 9. Selecting the Second DIV
// =================================================

console.log(divs[1]);


// =================================================
// 10. length
// =================================================

/*
getElementsByClassName()
and
getElementsByTagName()

can return multiple elements.

.length tells us how many
elements were selected.
*/

console.log(textElements.length);

console.log(paragraphs.length);

console.log(divs.length);


// =================================================
// IMPORTANT DIFFERENCE
// =================================================

/*

getElementById()
        ↓
Selects one element.


getElementsByClassName()
        ↓
Can select multiple elements.


getElementsByTagName()
        ↓
Can select multiple elements.

*/


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Select an element using its id.


// Q2. Store the selected element in a variable.


// Q3. Select all elements having the class "text".


// Q4. Print the first element from the
// selected class elements.


// Q5. Print the second element from the
// selected class elements.


// Q6. Print the number of elements
// having the class "text".


// Q7. Select all <p> elements.


// Q8. Print the first <p> element.


// Q9. Print the number of <p> elements.


// Q10. Select all <div> elements.


// Q11. Print the first <div> element.


// Q12. Print the number of <div> elements.


// Q13. Select all <h1> elements.


// Q14. What happens if you use:
// document.getElementById()
// with an id that does not exist?


// Q15. What is the difference between:
//
// getElementById()
// getElementsByClassName()
// getElementsByTagName()


// =================================================
// QUICK REVISION
// =================================================

/*

1. Select by ID:

document.getElementById("title");


2. Select by Class:

document.getElementsByClassName("text");


3. Select by Tag:

document.getElementsByTagName("p");


4. Access an element by index:

elements[0];

elements[1];


5. Count selected elements:

elements.length;

*/


/*
    14_DOM.js


    Topics:
    1. querySelector()
    2. querySelectorAll()
    3. Selecting by ID
    4. Selecting by Class
    5. Selecting by Tag
    6. CSS selectors
    7. Indexing
    8. length
*/


// =================================================
// HTML USED FOR EXAMPLES
// =================================================

/*

<body>

    <h1 id="title">Hello JavaScript</h1>

    <p class="text">Learning DOM</p>
    <p class="text">Learning JavaScript</p>

    <div class="box">
        <p>Box 1</p>
    </div>

    <div class="box">
        <p>Box 2</p>
    </div>

</body>

*/


// =================================================
// 1. querySelector()
// =================================================

{
    let element = document.querySelector("#title");

    console.log(element);
}


// =================================================
// 2. Select by ID
// =================================================

{
    let element = document.querySelector("#title");

    console.log(element);
}


// =================================================
// 3. Select by Class
// =================================================

{
    let element = document.querySelector(".text");

    console.log(element);
}


// =================================================
// 4. Select by Tag
// =================================================

{
    let element = document.querySelector("p");

    console.log(element);
}


// =================================================
// 5. querySelector() returns FIRST element
// =================================================

{
    let element = document.querySelector(".text");

    console.log(element);
}


// =================================================
// 6. querySelectorAll()
// =================================================

{
    let elements = document.querySelectorAll(".text");

    console.log(elements);
}


// =================================================
// 7. Access first element
// =================================================

{
    let elements = document.querySelectorAll(".text");

    console.log(elements[0]);
}


// =================================================
// 8. Access second element
// =================================================

{
    let elements = document.querySelectorAll(".text");

    console.log(elements[1]);
}


// =================================================
// 9. Count selected elements
// =================================================

{
    let elements = document.querySelectorAll(".text");

    console.log(elements.length);
}


// =================================================
// 10. Select all paragraphs
// =================================================

{
    let elements = document.querySelectorAll("p");

    console.log(elements);
}


// =================================================
// 11. Select all divs
// =================================================

{
    let elements = document.querySelectorAll("div");

    console.log(elements);
}


// =================================================
// 12. ID Selector
// =================================================

{
    let element = document.querySelector("#title");

    console.log(element);
}


// =================================================
// 13. Class Selector
// =================================================

{
    let element = document.querySelector(".box");

    console.log(element);
}


// =================================================
// 14. Tag Selector
// =================================================

{
    let element = document.querySelector("h1");

    console.log(element);
}


// =================================================
// 15. Combined Selector
// =================================================

/*
p.text

Means:

Select a <p> element
with class="text".
*/

{
    let element = document.querySelector("p.text");

    console.log(element);
}


// =================================================
// 16. Descendant Selector
// =================================================

/*
.box p

Means:

Select a <p> inside .box.
*/

{
    let element = document.querySelector(".box p");

    console.log(element);
}


// =================================================
// 17. querySelectorAll() with class
// =================================================

{
    let elements = document.querySelectorAll(".box");

    console.log(elements);
}


// =================================================
// 18. querySelectorAll() with tag
// =================================================

{
    let elements = document.querySelectorAll("p");

    console.log(elements);
}


// =================================================
// 19. querySelectorAll() with combined selector
// =================================================

{
    let elements = document.querySelectorAll("p.text");

    console.log(elements);
}


// =================================================
// 20. querySelectorAll() with descendant selector
// =================================================

{
    let elements = document.querySelectorAll(".box p");

    console.log(elements);
}


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Select the element with id="title"
// using querySelector().


// Q2. Select the first element having
// class="text".


// Q3. Select the first <p> element.


// Q4. Select all elements having
// class="text".


// Q5. Select all <p> elements.


// Q6. Select all <div> elements.


// Q7. Print the first element from
// querySelectorAll().


// Q8. Print the second element from
// querySelectorAll().


// Q9. Print the number of elements
// selected using querySelectorAll().


// Q10. Select a <p> having class="text"
// using:
//
// p.text


// Q11. What is the difference between:
//
// querySelector()
// querySelectorAll()


// Q12. What does # mean in CSS selectors?


// Q13. What does . mean in CSS selectors?


// Q14. What happens when querySelector()
// finds multiple matching elements?


// Q15. Select a <p> inside an element
// having class="box".


// =================================================
// QUICK REVISION
// =================================================

/*

querySelector()
→ Selects the FIRST matching element.

querySelectorAll()
→ Selects ALL matching elements.


ID:

document.querySelector("#title");


CLASS:

document.querySelector(".text");


TAG:

document.querySelector("p");


ALL:

document.querySelectorAll(".text");


INDEX:

elements[0];

elements[1];


COUNT:

elements.length;


COMBINED:

document.querySelector("p.text");


DESCENDANT:

document.querySelector(".box p");

*/



/*
    14_DOM.js

    Topics:
    1. innerText
    2. textContent
    3. innerHTML
    4. Reading content
    5. Changing content
*/


// =================================================
// HTML USED FOR EXAMPLES
// =================================================

/*

<body>

    <h1 id="title">Hello JavaScript</h1>

    <p id="message">Welcome to DOM</p>

    <div id="box">
        Hello
    </div>

</body>

*/


// =================================================
// 1. innerText
// =================================================

/*
innerText is used to get or change
the visible text of an element.

Syntax:

element.innerText
*/


// =================================================
// 2. Reading innerText
// =================================================

{
    let element = document.querySelector("#title");

    console.log(element.innerText);
}


// =================================================
// 3. Changing innerText
// =================================================

{
    let element = document.querySelector("#title");

    element.innerText = "Hello JavaScript DOM";
}


// =================================================
// 4. Changing Paragraph Text
// =================================================

{
    let element = document.querySelector("#message");

    element.innerText = "I am learning DOM";
}


// =================================================
// 5. textContent
// =================================================

/*
textContent is used to get or change
the text content of an element.

Syntax:

element.textContent
*/


// =================================================
// 6. Reading textContent
// =================================================

{
    let element = document.querySelector("#message");

    console.log(element.textContent);
}


// =================================================
// 7. Changing textContent
// =================================================

{
    let element = document.querySelector("#message");

    element.textContent = "Learning JavaScript";
}


// =================================================
// 8. innerHTML
// =================================================

/*
innerHTML is used to get or change
the HTML inside an element.

Example:

element.innerHTML = "<b>Hello</b>";

The <b> tag will be treated as HTML.
*/


// =================================================
// 9. Reading innerHTML
// =================================================

{
    let element = document.querySelector("#box");

    console.log(element.innerHTML);
}


// =================================================
// 10. Changing innerHTML
// =================================================

{
    let element = document.querySelector("#box");

    element.innerHTML = "<b>Hello JavaScript</b>";
}


// =================================================
// 11. Adding HTML using innerHTML
// =================================================

{
    let element = document.querySelector("#box");

    element.innerHTML = "<p>Learning DOM</p>";
}


// =================================================
// 12. innerText vs textContent
// =================================================

/*

Both can work with text.

innerText
→ Focuses on visible text.

textContent
→ Gets the text content of the element.

*/


// =================================================
// 13. innerText vs innerHTML
// =================================================

/*

innerText:

element.innerText = "<b>Hello</b>";

This displays:

<b>Hello</b>


innerHTML:

element.innerHTML = "<b>Hello</b>";

This displays:

Hello

with bold formatting.
*/


// =================================================
// 14. Simple Example
// =================================================

{
    let element = document.querySelector("#title");

    element.innerText = "New Heading";

    console.log(element.innerText);
}


// =================================================
// 15. Simple HTML Example
// =================================================

{
    let element = document.querySelector("#box");

    element.innerHTML =
        "<h2>DOM Practice</h2>";
}


// =================================================
// 16. Add Multiple HTML Elements
// =================================================

{
    let element = document.querySelector("#box");

    element.innerHTML = `
        <h2>JavaScript</h2>
        <p>Learning DOM</p>
    `;
}


// =================================================
// 17. Replace Existing Content
// =================================================

{
    let element = document.querySelector("#message");

    element.innerText = "Content Changed";
}


// =================================================
// 18. Read Before Changing
// =================================================

{
    let element = document.querySelector("#title");

    console.log("Before:", element.innerText);

    element.innerText = "Updated Title";

    console.log("After:", element.innerText);
}


// =================================================
// 19. Simple Dynamic Message
// =================================================

{
    let element = document.querySelector("#message");

    let name = "Shashi";

    element.innerText = `Hello ${name}`;
}


// =================================================
// 20. Simple HTML Content
// =================================================

{
    let element = document.querySelector("#box");

    element.innerHTML = `
        <h2>Welcome</h2>
        <p>JavaScript DOM Practice</p>
    `;
}


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Select an element with id="title"
// and print its innerText.


// Q2. Change the innerText of #title
// to "Hello DOM".


// Q3. Select #message and change
// its text using innerText.


// Q4. Read the textContent of an element.


// Q5. Change the textContent of an element.


// Q6. Select #box and print its innerHTML.


// Q7. Change the innerHTML of #box
// to:
//
// <h2>Hello</h2>


// Q8. Add a <p> element inside #box
// using innerHTML.


// Q9. Add a heading and paragraph
// inside #box using innerHTML.


// Q10. Create a dynamic message:
//
// "Hello Shashi"
//
// using a variable and innerText.


// Q11. What is innerText?


// Q12. What is textContent?


// Q13. What is innerHTML?


// Q14. What is the difference between:
//
// innerText
// textContent


// Q15. What is the difference between:
//
// innerText
// innerHTML


// =================================================
// QUICK REVISION
// =================================================

/*

READ TEXT:

element.innerText

element.textContent


CHANGE TEXT:

element.innerText = "Hello";

element.textContent = "Hello";


READ HTML:

element.innerHTML


CHANGE HTML:

element.innerHTML = "<h2>Hello</h2>";


IMPORTANT:

innerText
→ Text

textContent
→ Text content

innerHTML
→ HTML + Text

*/



/*
    14_DOM.js


    Topics:
    1. element.style
    2. Changing color
    3. Changing background
    4. Changing font size
    5. Changing width and height
    6. Changing multiple styles
*/


// =================================================
// HTML USED FOR EXAMPLES
// =================================================

/*

<body>

    <h1 id="title">Hello JavaScript</h1>

    <p id="message">Learning DOM</p>

    <div id="box">This is a box</div>

</body>

*/


// =================================================
// 1. element.style
// =================================================

/*
The style property is used to
change CSS using JavaScript.

Syntax:

element.style.property = "value";
*/


// =================================================
// 2. Change Text Color
// =================================================

{
    let element = document.querySelector("#title");

    element.style.color = "blue";
}


// =================================================
// 3. Change Background Color
// =================================================

{
    let element = document.querySelector("#message");

    element.style.backgroundColor = "yellow";
}


// =================================================
// 4. Change Font Size
// =================================================

{
    let element = document.querySelector("#title");

    element.style.fontSize = "40px";
}


// =================================================
// 5. Change Font Weight
// =================================================

{
    let element = document.querySelector("#title");

    element.style.fontWeight = "bold";
}


// =================================================
// 6. Change Text Alignment
// =================================================

{
    let element = document.querySelector("#title");

    element.style.textAlign = "center";
}


// =================================================
// 7. Change Width
// =================================================

{
    let element = document.querySelector("#box");

    element.style.width = "300px";
}


// =================================================
// 8. Change Height
// =================================================

{
    let element = document.querySelector("#box");

    element.style.height = "150px";
}


// =================================================
// 9. Change Background of Box
// =================================================

{
    let element = document.querySelector("#box");

    element.style.backgroundColor = "lightgray";
}


// =================================================
// 10. Add Border
// =================================================

{
    let element = document.querySelector("#box");

    element.style.border = "2px solid black";
}


// =================================================
// 11. Add Padding
// =================================================

{
    let element = document.querySelector("#box");

    element.style.padding = "20px";
}


// =================================================
// 12. Add Margin
// =================================================

{
    let element = document.querySelector("#box");

    element.style.margin = "20px";
}


// =================================================
// 13. Change Multiple Styles
// =================================================

{
    let element = document.querySelector("#box");

    element.style.color = "white";
    element.style.backgroundColor = "black";
    element.style.fontSize = "20px";
}


// =================================================
// 14. CSS Property Names in JavaScript
// =================================================

/*
CSS:

background-color

JavaScript:

backgroundColor


CSS:

font-size

JavaScript:

fontSize


CSS:

text-align

JavaScript:

textAlign
*/


// =================================================
// 15. Change Color and Font Size
// =================================================

{
    let element = document.querySelector("#message");

    element.style.color = "red";
    element.style.fontSize = "25px";
}


// =================================================
// 16. Change Box Size
// =================================================

{
    let element = document.querySelector("#box");

    element.style.width = "250px";
    element.style.height = "100px";
}


// =================================================
// 17. Change Box Appearance
// =================================================

{
    let element = document.querySelector("#box");

    element.style.backgroundColor = "lightblue";
    element.style.border = "2px solid black";
    element.style.padding = "15px";
}


// =================================================
// 18. Change Heading Appearance
// =================================================

{
    let element = document.querySelector("#title");

    element.style.color = "green";
    element.style.fontSize = "35px";
    element.style.textAlign = "center";
}


// =================================================
// 19. Read Inline Style
// =================================================

{
    let element = document.querySelector("#title");

    element.style.color = "purple";

    console.log(element.style.color);
}


// =================================================
// 20. Simple Style Example
// =================================================

{
    let element = document.querySelector("#message");

    element.style.color = "white";
    element.style.backgroundColor = "black";
    element.style.padding = "10px";
    element.style.fontSize = "20px";
}


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Change the text color of #title.


// Q2. Change the background color of #title.


// Q3. Change the font size of #title to 30px.


// Q4. Make the text of #title bold.


// Q5. Center-align the text of #title.


// Q6. Change the color of #message.


// Q7. Change the background color of #message.


// Q8. Change the width of #box to 300px.


// Q9. Change the height of #box to 150px.


// Q10. Add a 2px border to #box.


// Q11. Add 20px padding to #box.


// Q12. Add 20px margin to #box.


// Q13. Change multiple styles of #box.


// Q14. Write the JavaScript version of:
//
// background-color


// Q15. Write the JavaScript version of:
//
// font-size


// Q16. Write the JavaScript version of:
//
// text-align


// Q17. Change #title to:
// color = red
// font-size = 40px
// text-align = center


// Q18. Change #box to:
// width = 200px
// height = 100px
// background = lightblue


// Q19. Print the current color of #title.


// Q20. Create your own style combination
// for #message.


// =================================================
// QUICK REVISION
// =================================================

/*

CHANGE STYLE:

element.style.color = "red";

element.style.backgroundColor = "yellow";

element.style.fontSize = "30px";

element.style.fontWeight = "bold";

element.style.textAlign = "center";

element.style.width = "300px";

element.style.height = "150px";

element.style.border = "2px solid black";

element.style.padding = "20px";

element.style.margin = "20px";


IMPORTANT:

CSS:
background-color

JavaScript:
backgroundColor


CSS:
font-size

JavaScript:
fontSize


CSS:
text-align

JavaScript:
textAlign

*/
