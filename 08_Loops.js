/*
=========================================================
Chapter 08 - Loops
=========================================================

What are Loops?
---------------
- A loop is used to execute a block of code repeatedly.
- Instead of writing the same code multiple times, we use loops.
- Loops reduce code duplication and make programs shorter and easier to maintain.

Example without loop:
---------------------
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

Example with loop:
------------------
for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}

Output:
Hello
Hello
Hello
Hello
Hello


=========================================================
Why Do We Need Loops?
=========================================================

Imagine you want to print numbers from 1 to 100.

Without loops:
--------------
console.log(1);
console.log(2);
console.log(3);
...
console.log(100);

This is:
- Time-consuming
- Difficult to maintain
- Not practical

With loops:
-----------
Only a few lines of code are needed.


=========================================================
Types of Loops in JavaScript
=========================================================

1. for Loop
------------
Used when the number of iterations is known.

Syntax:

for (initialization; condition; update) {
    // code
}


Example:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Output:
1
2
3
4
5


=========================================================

2. while Loop
--------------
Used when the number of iterations is not fixed.

Syntax:

initialization;

while (condition) {
    // code

    update;
}


Example:

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

Output:
1
2
3
4
5


=========================================================

3. do...while Loop
-------------------
Executes the code at least one time,
even if the condition is false.

Syntax:

initialization;

do {
    // code

    update;
}
while (condition);


Example:

let i = 1;

do {
    console.log(i);
    i++;
}
while (i <= 5);

Output:
1
2
3
4
5


=========================================================
Loop Flow (for Loop)
=========================================================

Step 1:
Initialization

↓

Step 2:
Condition Check

↓

If condition is true
↓

Execute Code

↓

Update Variable

↓

Go back to Condition

↓

Condition becomes false

↓

Loop Ends


=========================================================
Loop Components
=========================================================

1. Initialization
-----------------
Runs only once.

Example:
let i = 1;

---------------------------------------------------------

2. Condition
------------
Checked before every iteration.

Example:
i <= 5

---------------------------------------------------------

3. Update
---------
Changes the loop variable.

Examples:
i++
i--
i += 2
i -= 3


=========================================================
Infinite Loop
=========================================================

An infinite loop never stops because the condition
always remains true.

Example:

for (;;) {
    console.log("Infinite Loop");
}

or

let i = 1;

while (true) {
    console.log(i);
    i++;
}

Avoid infinite loops unless intentionally required.


=========================================================
Choosing the Right Loop
=========================================================

Use for loop
------------
- Number of iterations is known.
- Counting operations.

Example:
Print numbers from 1 to 100.

---------------------------------------------------------

Use while loop
--------------
- Number of iterations is unknown.
- Depends on a condition.

Example:
Keep asking for input until correct.

---------------------------------------------------------

Use do...while loop
-------------------
- Code must execute at least once.

Example:
Display a menu before checking the exit condition.


=========================================================
Comparison
=========================================================

for Loop
---------
✔ Best when iterations are known.

while Loop
-----------
✔ Best when condition controls execution.

do...while Loop
----------------
✔ Executes at least once.


=========================================================
Summary
=========================================================

✔ Loops execute code repeatedly.
✔ They reduce code duplication.
✔ JavaScript has three main loops:
   - for
   - while
   - do...while
✔ A for loop is commonly used when the number of iterations is known.
✔ A while loop is useful when the stopping condition is uncertain.
✔ A do...while loop guarantees at least one execution.
✔ Always ensure the loop condition eventually becomes false to avoid infinite loops.

=========================================================
End of Chapter 08 - Loops
=========================================================
*/