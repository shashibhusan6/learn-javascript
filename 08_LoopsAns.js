/*
=========================================
        08_LoopsAns.js
        WHILE LOOP ANSWERS
=========================================
*/

// =====================================
// EASY (1-15)
// =====================================

// Q1. Print numbers from 1 to 10.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Q2. Print numbers from 10 to 1.
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Q3. Print even numbers from 1 to 20.
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// Q4. Print odd numbers from 1 to 20.
i = 1;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// Q5. Sum of numbers from 1 to 10.
i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

// Q6. Sum of even numbers from 1 to 50.
i = 2;
sum = 0;

while (i <= 50) {
    sum += i;
    i += 2;
}
console.log(sum);

// Q7. Multiplication table of 7.
i = 1;

while (i <= 10) {
    console.log(`7 x ${i} = ${7 * i}`);
    i++;
}

// Q8. Print numbers from 50 to 100.
i = 50;

while (i <= 100) {
    console.log(i);
    i++;
}

// Q9. Print numbers from 100 to 50.
i = 100;

while (i >= 50) {
    console.log(i);
    i--;
}

// Q10. Squares from 1 to 10.
i = 1;

while (i <= 10) {
    console.log(i * i);
    i++;
}

// Q11. Cubes from 1 to 10.
i = 1;

while (i <= 10) {
    console.log(i * i * i);
    i++;
}

// Q12. Count numbers from 1 to 100.
i = 1;
let count = 0;

while (i <= 100) {
    count++;
    i++;
}

console.log(count);

// Q13. Numbers divisible by 3 (1-30).
i = 1;

while (i <= 30) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++;
}

// Q14. Numbers divisible by both 3 and 5.
i = 1;

while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Q15. Factorial of 5.
let num = 5;
let fact = 1;

while (num > 0) {
    fact *= num;
    num--;
}

console.log(fact);

// =====================================
// MEDIUM (16-30)
// =====================================

// Q16. Factorial of user-given number.
num = 6;
fact = 1;

while (num > 0) {
    fact *= num;
    num--;
}

console.log(fact);

// Q17. Reverse a number.
num = 1234;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(reverse);

// Q18. Count digits.
num = 123456;
count = 0;

while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}

console.log(count);

// Q19. Sum of digits.
num = 12345;
sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log(sum);

// Q20. Product of digits.
num = 1234;
let product = 1;

while (num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
}

console.log(product);

// Q21. Palindrome number.
num = 1221;

let temp = num;
reverse = 0;

while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}

if (reverse === num)
    console.log("Palindrome");
else
    console.log("Not Palindrome");

// Q22. Largest digit.
num = 938472;
let largest = 0;

while (num > 0) {
    let digit = num % 10;

    if (digit > largest)
        largest = digit;

    num = Math.floor(num / 10);
}

console.log(largest);

// Q23. Smallest digit.
num = 938472;
let smallest = 9;

while (num > 0) {
    let digit = num % 10;

    if (digit < smallest)
        smallest = digit;

    num = Math.floor(num / 10);
}

console.log(smallest);

// Q24. Count even digits.
num = 12345678;
count = 0;

while (num > 0) {
    let digit = num % 10;

    if (digit % 2 === 0)
        count++;

    num = Math.floor(num / 10);
}

console.log(count);

// Q25. Count odd digits.
num = 12345678;
count = 0;

while (num > 0) {
    let digit = num % 10;

    if (digit % 2 !== 0)
        count++;

    num = Math.floor(num / 10);
}

console.log(count);

// Q26. Fibonacci series.
let n = 10;
let a = 0;
let b = 1;
i = 1;

while (i <= n) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;

    i++;
}

// Q27. x^n
let x = 2;
let power = 5;
let result = 1;

while (power > 0) {
    result *= x;
    power--;
}

console.log(result);

// Q28. GCD
let num1 = 24;
let num2 = 36;

while (num2 !== 0) {
    let rem = num1 % num2;
    num1 = num2;
    num2 = rem;
}

console.log(num1);

// Q29. LCM
num1 = 12;
num2 = 18;

let a1 = num1;
let b1 = num2;

while (b1 !== 0) {
    let rem = a1 % b1;
    a1 = b1;
    b1 = rem;
}

let gcd = a1;
let lcm = (num1 * num2) / gcd;

console.log(lcm);

// Q30. Decimal to Binary.
num = 13;
let binary = "";

while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
}

console.log(binary);

// =====================================
// HARD (31-45)
// =====================================

// Q31. Prime Number
num = 29;

i = 2;
let prime = true;

while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
        prime = false;
        break;
    }
    i++;
}

console.log(prime ? "Prime" : "Not Prime");

// Q32. Prime numbers from 1 to N.
n = 50;

let current = 2;

while (current <= n) {

    let divisor = 2;
    prime = true;

    while (divisor <= Math.sqrt(current)) {

        if (current % divisor === 0) {
            prime = false;
            break;
        }

        divisor++;
    }

    if (prime)
        console.log(current);

    current++;
}

// Q33. Armstrong (3-digit)
num = 153;

temp = num;
sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

console.log(sum === num ? "Armstrong" : "Not Armstrong");

// Q34. Armstrong (Any digits)
num = 9474;

temp = num;
count = 0;

while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

temp = num;
sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** count;
    temp = Math.floor(temp / 10);
}

console.log(sum === num ? "Armstrong" : "Not Armstrong");

// Q35. Perfect Number
num = 28;

i = 1;
sum = 0;

while (i < num) {
    if (num % i === 0)
        sum += i;

    i++;
}

console.log(sum === num ? "Perfect" : "Not Perfect");

// Q36. Perfect numbers from 1 to N.
n = 100;
num = 1;

while (num <= n) {

    i = 1;
    sum = 0;

    while (i < num) {
        if (num % i === 0)
            sum += i;

        i++;
    }

    if (sum === num)
        console.log(num);

    num++;
}

// Q37. Strong Number
num = 145;

temp = num;
sum = 0;

while (temp > 0) {

    let digit = temp % 10;

    fact = 1;

    while (digit > 0) {
        fact *= digit;
        digit--;
    }

    sum += fact;

    temp = Math.floor(temp / 10);
}

console.log(sum === num ? "Strong" : "Not Strong");

// Q38. Second Largest Digit
num = 9837642;

let first = -1;
let second = -1;

while (num > 0) {

    let digit = num % 10;

    if (digit > first) {
        second = first;
        first = digit;
    } else if (digit > second && digit !== first) {
        second = digit;
    }

    num = Math.floor(num / 10);
}

console.log(second);

// Q39. Sum of Prime Digits
num = 123456789;
sum = 0;

while (num > 0) {

    let digit = num % 10;

    if (digit === 2 || digit === 3 || digit === 5 || digit === 7)
        sum += digit;

    num = Math.floor(num / 10);
}

console.log(sum);

// Q40. Remove all occurrences of a digit.
num = 122352;
let removeDigit = 2;

temp = num;
let newNum = 0;
let place = 1;

while (temp > 0) {

    let digit = temp % 10;

    if (digit !== removeDigit) {
        newNum += digit * place;
        place *= 10;
    }

    temp = Math.floor(temp / 10);
}

console.log(newNum);

// Q41. Coprime Numbers
num1 = 14;
num2 = 25;

a1 = num1;
b1 = num2;

while (b1 !== 0) {
    let rem = a1 % b1;
    a1 = b1;
    b1 = rem;
}

console.log(a1 === 1 ? "Coprime" : "Not Coprime");

// Q42. Happy Number
num = 19;

let seen = [];

while (num !== 1 && !seen.includes(num)) {

    seen.push(num);

    sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }

    num = sum;
}

console.log(num === 1 ? "Happy Number" : "Not Happy");

// Q43. Rotate number right by k positions.
num = 12345;
let k = 2;

let str = num.toString();

k = k % str.length;

let rotated = str.slice(-k) + str.slice(0, str.length - k);

console.log(rotated);

// Q44. Fibonacci until next term exceeds N.
n = 100;

a = 0;
b = 1;

while (a <= n) {

    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}

// Q45. Number Guessing Game

/*
const prompt = require("prompt-sync")();

let secret = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

while (guess !== secret) {

    guess = Number(prompt("Enter your guess: "));
    attempts++;

    if (guess > secret)
        console.log("Too High");
    else if (guess < secret)
        console.log("Too Low");
    else
        console.log("Correct!");
}

console.log("Attempts:", attempts);
*/






/*

DO-WHILE LOOP PRACTICE SET
Part 1 (Q1–Q15)
===============

*/

// Q1. Print numbers from 1 to 10 using a do-while loop.
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

// Q2. Print numbers from 10 to 1 in reverse order.
i = 10;

do {
    console.log(i);
    i--;
} while (i >= 1);

// Q3. Print all even numbers from 1 to 20.
i = 2;

do {
    console.log(i);
    i += 2;
} while (i <= 20);

// Q4. Print all odd numbers from 1 to 20.
i = 1;

do {
    console.log(i);
    i += 2;
} while (i <= 20);

// Q5. Find the sum of numbers from 1 to 10.
i = 1;
let sum = 0;

do {
    sum += i;
    i++;
} while (i <= 10);

console.log(sum);

// Q6. Find the sum of even numbers from 1 to 50.
i = 2;
sum = 0;

do {
    sum += i;
    i += 2;
} while (i <= 50);

console.log(sum);

// Q7. Print the multiplication table of 7.
i = 1;

do {
    console.log(`7 x ${i} = ${7 * i}`);
    i++;
} while (i <= 10);

// Q8. Print numbers from 50 to 100.
i = 50;

do {
    console.log(i);
    i++;
} while (i <= 100);

// Q9. Print numbers from 100 to 50.
i = 100;

do {
    console.log(i);
    i--;
} while (i >= 50);

// Q10. Print the squares of numbers from 1 to 10.
i = 1;

do {
    console.log(i * i);
    i++;
} while (i <= 10);

// Q11. Print the cubes of numbers from 1 to 10.
i = 1;

do {
    console.log(i * i * i);
    i++;
} while (i <= 10);

// Q12. Count how many numbers are there from 1 to 100.
i = 1;
let count = 0;

do {
    count++;
    i++;
} while (i <= 100);

console.log(count);

// Q13. Print numbers divisible by 3 between 1 and 30.
i = 1;

do {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 30);

// Q14. Print numbers divisible by both 3 and 5 between 1 and 100.
i = 1;

do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);

// Q15. Calculate the factorial of 5.
i = 1;
let fact = 1;

do {
    fact *= i;
    i++;
} while (i <= 5);

console.log(fact);





/*
=========================================
DO-WHILE LOOP PRACTICE SET
Part 2 (Q16–Q30)
=========================================
*/

// Q16. Calculate the factorial of a user-given number.
let n = 5;
let i = 1;
let fact = 1;

do {
    fact *= i;
    i++;
} while (i <= n);

console.log(fact);


// Q17. Reverse a number.
let num = 1234;
let rev = 0;

do {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
} while (num > 0);

console.log(rev);


// Q18. Count the digits in a number.
num = 123456;
let count = 0;

do {
    count++;
    num = Math.floor(num / 10);
} while (num > 0);

console.log(count);


// Q19. Find the sum of digits of a number.
num = 12345;
let sum = 0;

do {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
} while (num > 0);

console.log(sum);


// Q20. Find the product of digits of a number.
num = 1234;
let product = 1;

do {
    let digit = num % 10;
    product *= digit;
    num = Math.floor(num / 10);
} while (num > 0);

console.log(product);


// Q21. Check whether a number is a palindrome.
num = 121;
let temp = num;
rev = 0;

do {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
} while (temp > 0);

if (rev === num) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// Q22. Find the largest digit in a number.
num = 583729;
let largest = 0;

do {
    let digit = num % 10;

    if (digit > largest) {
        largest = digit;
    }

    num = Math.floor(num / 10);
} while (num > 0);

console.log(largest);


// Q23. Find the smallest digit in a number.
num = 583729;
let smallest = 9;

do {
    let digit = num % 10;

    if (digit < smallest) {
        smallest = digit;
    }

    num = Math.floor(num / 10);
} while (num > 0);

console.log(smallest);


// Q24. Count how many even digits a number contains.
num = 123456789;
count = 0;

do {
    let digit = num % 10;

    if (digit % 2 === 0) {
        count++;
    }

    num = Math.floor(num / 10);
} while (num > 0);

console.log(count);


// Q25. Count how many odd digits a number contains.
num = 123456789;
count = 0;

do {
    let digit = num % 10;

    if (digit % 2 !== 0) {
        count++;
    }

    num = Math.floor(num / 10);
} while (num > 0);

console.log(count);


// Q26. Print the Fibonacci series for n terms.
n = 10;
let a = 0;
let b = 1;
i = 1;

do {
    console.log(a);

    let c = a + b;
    a = b;
    b = c;

    i++;
} while (i <= n);


// Q27. Compute x raised to the power n without using Math.pow().
let x = 2;
n = 5;
let power = 1;

i = 1;

do {
    power *= x;
    i++;
} while (i <= n);

console.log(power);


// Q28. Find the GCD (HCF) of two numbers using a do-while loop.
let num1 = 24;
let num2 = 36;
let gcd = 1;
i = 1;

do {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }

    i++;
} while (i <= num1 && i <= num2);

console.log(gcd);


// Q29. Find the LCM of two numbers.
num1 = 12;
num2 = 18;

let max = num1 > num2 ? num1 : num2;
let lcm = max;

do {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
        break;
    }

    lcm++;
} while (true);

console.log(lcm);


// Q30. Convert a decimal number to binary using a do-while loop.
num = 13;
let binary = "";

do {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
} while (num > 0);

console.log(binary);
