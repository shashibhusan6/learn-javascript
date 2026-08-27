/*
    14_DOM.js

    Topics:
    1. What is an attribute?
    2. getAttribute()
    3. setAttribute()
    4. removeAttribute()
    5. hasAttribute()
    6. Basic practice
*/


// =================================================
// HTML USED FOR EXAMPLES
// =================================================

/*

<body>

    <h1 id="title">Hello JavaScript</h1>

    <a id="link"
       href="https://example.com"
       target="_blank">
       Visit Website
    </a>

    <img id="image"
         src="image.jpg"
         alt="Sample Image">

    <input id="username"
           type="text"
           placeholder="Enter your name">

</body>

*/


// =================================================
// 1. WHAT IS AN ATTRIBUTE?
// =================================================

/*
Attributes provide additional information
about an HTML element.

Example:

<img src="image.jpg" alt="Image">

Here:

src  → Attribute
alt  → Attribute

Another example:

<a href="https://example.com">
    Website
</a>

href → Attribute
*/


// =================================================
// 2. getAttribute()
// =================================================

/*
getAttribute() is used to READ
the value of an attribute.

Syntax:

element.getAttribute("attributeName");
*/


// =================================================
// 3. Get href
// =================================================

{
    let element = document.querySelector("#link");

    console.log(element.getAttribute("href"));
}


// =================================================
// 4. Get target
// =================================================

{
    let element = document.querySelector("#link");

    console.log(element.getAttribute("target"));
}


// =================================================
// 5. Get src
// =================================================

{
    let element = document.querySelector("#image");

    console.log(element.getAttribute("src"));
}


// =================================================
// 6. Get alt
// =================================================

{
    let element = document.querySelector("#image");

    console.log(element.getAttribute("alt"));
}


// =================================================
// 7. setAttribute()
// =================================================

/*
setAttribute() is used to ADD
or CHANGE an attribute.

Syntax:

element.setAttribute("attribute", "value");
*/


// =================================================
// 8. Change href
// =================================================

{
    let element = document.querySelector("#link");

    element.setAttribute(
        "href",
        "https://google.com"
    );
}


// =================================================
// 9. Change target
// =================================================

{
    let element = document.querySelector("#link");

    element.setAttribute("target", "_self");
}


// =================================================
// 10. Change image source
// =================================================

{
    let element = document.querySelector("#image");

    element.setAttribute("src", "new-image.jpg");
}


// =================================================
// 11. Change image alt
// =================================================

{
    let element = document.querySelector("#image");

    element.setAttribute(
        "alt",
        "New Image"
    );
}


// =================================================
// 12. Add an Attribute
// =================================================

/*
setAttribute() can also add an attribute
that does not already exist.
*/

{
    let element = document.querySelector("#title");

    element.setAttribute(
        "title",
        "This is a heading"
    );
}


// =================================================
// 13. removeAttribute()
// =================================================

/*
removeAttribute() removes an attribute.

Syntax:

element.removeAttribute("attributeName");
*/


// =================================================
// 14. Remove target
// =================================================

{
    let element = document.querySelector("#link");

    element.removeAttribute("target");
}


// =================================================
// 15. Remove alt
// =================================================

{
    let element = document.querySelector("#image");

    element.removeAttribute("alt");
}


// =================================================
// 16. hasAttribute()
// =================================================

/*
hasAttribute() checks whether an element
has a particular attribute.

It returns:

true  → attribute exists
false → attribute does not exist

Syntax:

element.hasAttribute("attributeName");
*/


// =================================================
// 17. Check href
// =================================================

{
    let element = document.querySelector("#link");

    console.log(
        element.hasAttribute("href")
    );
}


// =================================================
// 18. Check target
// =================================================

{
    let element = document.querySelector("#link");

    console.log(
        element.hasAttribute("target")
    );
}


// =================================================
// 19. Complete Example
// =================================================

{
    let element = document.querySelector("#link");

    console.log(
        "Before:",
        element.getAttribute("href")
    );

    element.setAttribute(
        "href",
        "https://google.com"
    );

    console.log(
        "After:",
        element.getAttribute("href")
    );
}


// =================================================
// 20. Attribute Check Example
// =================================================

{
    let element = document.querySelector("#image");

    if (element.hasAttribute("src")) {
        console.log("Image has src attribute");
    } else {
        console.log("Image does not have src attribute");
    }
}


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Get the href attribute of #link.


// Q2. Get the target attribute of #link.


// Q3. Get the src attribute of #image.


// Q4. Get the alt attribute of #image.


// Q5. Change the href of #link to:
// "https://google.com"


// Q6. Change the target of #link to:
// "_self"


// Q7. Change the src of #image.


// Q8. Change the alt of #image.


// Q9. Add a title attribute to #title.


// Q10. Add a placeholder attribute to
// #username.


// Q11. Remove the target attribute from #link.


// Q12. Remove the alt attribute from #image.


// Q13. Check whether #link has an href
// attribute.


// Q14. Check whether #link has a target
// attribute.


// Q15. Check whether #image has an alt
// attribute.


// Q16. What does getAttribute() do?


// Q17. What does setAttribute() do?


// Q18. What does removeAttribute() do?


// Q19. What does hasAttribute() return?


// Q20. What is the difference between:
//
// getAttribute()
// setAttribute()
// removeAttribute()
// hasAttribute()


// =================================================
// QUICK REVISION
// =================================================

/*

READ ATTRIBUTE:

element.getAttribute("href");


ADD / CHANGE ATTRIBUTE:

element.setAttribute(
    "href",
    "https://google.com"
);


REMOVE ATTRIBUTE:

element.removeAttribute("target");


CHECK ATTRIBUTE:

element.hasAttribute("href");


IMPORTANT:

getAttribute()
→ Read


setAttribute()
→ Add / Change


removeAttribute()
→ Remove


hasAttribute()
→ Check


Example:

<a href="https://example.com">

href = attribute
*/



/*
    14_DOM.js


    Topics:
    1. createElement()
    2. appendChild()
    3. append()
    4. remove()
    5. Basic practice
*/


// =================================================
// HTML USED FOR EXAMPLES
// =================================================

/*

<body>

    <div id="container">
        <h1>DOM Practice</h1>
    </div>

</body>

*/


// =================================================
// 1. createElement()
// =================================================

/*
createElement() is used to create
a new HTML element using JavaScript.

Syntax:

document.createElement("tagName");
*/

{
    let element = document.createElement("p");

    console.log(element);
}


// =================================================
// 2. Create a Heading
// =================================================

{
    let element = document.createElement("h2");

    console.log(element);
}


// =================================================
// 3. Add Text to a New Element
// =================================================

{
    let element = document.createElement("p");

    element.innerText = "Hello JavaScript";

    console.log(element);
}


// =================================================
// 4. appendChild()
// =================================================

/*
appendChild() adds a new element
inside another element.

Syntax:

parent.appendChild(child);
*/

{
    let paragraph = document.createElement("p");

    paragraph.innerText = "New Paragraph";

    let container = document.querySelector("#container");

    container.appendChild(paragraph);
}


// =================================================
// 5. Create and Add a Heading
// =================================================

{
    let heading = document.createElement("h2");

    heading.innerText = "Learning DOM";

    let container = document.querySelector("#container");

    container.appendChild(heading);
}


// =================================================
// 6. append()
// =================================================

/*
append() can also be used to add
content or elements.

Syntax:

parent.append(element);
*/

{
    let paragraph = document.createElement("p");

    paragraph.innerText = "This is a new paragraph";

    let container = document.querySelector("#container");

    container.append(paragraph);
}


// =================================================
// 7. append() with Text
// =================================================

{
    let container = document.querySelector("#container");

    container.append("Hello from JavaScript");
}


// =================================================
// 8. Create Multiple Elements
// =================================================

{
    let container = document.querySelector("#container");

    let heading = document.createElement("h2");
    heading.innerText = "JavaScript";

    let paragraph = document.createElement("p");
    paragraph.innerText = "Learning DOM";

    container.append(heading);
    container.append(paragraph);
}


// =================================================
// 9. remove()
// =================================================

/*
remove() is used to remove
an element from the DOM.

Syntax:

element.remove();
*/


// =================================================
// 10. Remove an Element
// =================================================

{
    let element = document.querySelector("h1");

    element.remove();
}


// =================================================
// 11. Create and Then Remove
// =================================================

{
    let paragraph = document.createElement("p");

    paragraph.innerText = "Temporary Paragraph";

    let container = document.querySelector("#container");

    container.appendChild(paragraph);

    paragraph.remove();
}


// =================================================
// 12. Create Element with Attribute
// =================================================

{
    let link = document.createElement("a");

    link.innerText = "Visit Google";

    link.setAttribute(
        "href",
        "https://google.com"
    );

    let container = document.querySelector("#container");

    container.append(link);
}


// =================================================
// 13. Create Element with Style
// =================================================

{
    let paragraph = document.createElement("p");

    paragraph.innerText = "Styled Paragraph";

    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px";

    let container = document.querySelector("#container");

    container.append(paragraph);
}


// =================================================
// 14. Create a List Item
// =================================================

{
    let listItem = document.createElement("li");

    listItem.innerText = "JavaScript";

    let container = document.querySelector("#container");

    container.append(listItem);
}


// =================================================
// 15. Create Multiple List Items
// =================================================

{
    let item1 = document.createElement("li");
    item1.innerText = "HTML";

    let item2 = document.createElement("li");
    item2.innerText = "CSS";

    let item3 = document.createElement("li");
    item3.innerText = "JavaScript";

    let container = document.querySelector("#container");

    container.append(item1);
    container.append(item2);
    container.append(item3);
}


// =================================================
// 16. appendChild() vs append()
// =================================================

/*

appendChild()
→ Adds a node as the last child.

Example:

parent.appendChild(child);


append()
→ Adds elements or text.

Example:

parent.append(child);


Both can be used to add
new content to an element.
*/


// =================================================
// 17. Create a Button
// =================================================

{
    let button = document.createElement("button");

    button.innerText = "Click Me";

    let container = document.querySelector("#container");

    container.append(button);
}


// =================================================
// 18. Create a Div
// =================================================

{
    let div = document.createElement("div");

    div.innerText = "New Div";

    let container = document.querySelector("#container");

    container.append(div);
}


// =================================================
// 19. Create and Remove a Button
// =================================================

{
    let button = document.createElement("button");

    button.innerText = "Remove Me";

    let container = document.querySelector("#container");

    container.append(button);

    button.remove();
}


// =================================================
// 20. Complete Example
// =================================================

{
    let container = document.querySelector("#container");

    let heading = document.createElement("h2");

    heading.innerText = "DOM Practice";

    heading.style.color = "green";

    container.appendChild(heading);
}


// =================================================
// PRACTICE QUESTIONS
// =================================================


// Q1. Create a new <p> element.


// Q2. Create a new <h2> element.


// Q3. Create a <p> element and add
// some text using innerText.


// Q4. Add the new paragraph inside
// #container using appendChild().


// Q5. Create a heading and add it
// inside #container using append().


// Q6. Create a new <div> and add it
// to #container.


// Q7. Create a new button and add
// it to #container.


// Q8. Create a new <li> element and
// add it to #container.


// Q9. Create three <p> elements and
// add them to #container.


// Q10. Create a new element and
// give it an attribute using setAttribute().


// Q11. Create an element and change
// its style.


// Q12. Create a new paragraph and
// then remove it using remove().


// Q13. Select an existing element
// and remove it.


// Q14. What does createElement() do?


// Q15. What does appendChild() do?


// Q16. What does append() do?


// Q17. What does remove() do?


// Q18. What is the difference between:
//
// append()
// appendChild()


// Q19. Create a button with the text:
// "Submit"
// and add it to #container.


// Q20. Create a <p> element with:
//
// Text: "I am learning DOM"
// Color: blue
//
// Then add it to #container.


// =================================================
// QUICK REVISION
// =================================================

/*

CREATE:

document.createElement("p");


ADD:

parent.appendChild(child);


OR:

parent.append(child);


REMOVE:

element.remove();


BASIC FLOW:

Create
  ↓
Add content
  ↓
Add to DOM
  ↓
Modify if needed
  ↓
Remove if needed


Example:

let paragraph = document.createElement("p");

paragraph.innerText = "Hello";

container.append(paragraph);

paragraph.remove();

*/


// =================================================
// GIT COMMIT
// =================================================

