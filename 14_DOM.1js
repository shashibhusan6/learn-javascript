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



