[← README File](../README.md)

# Module 1 - JavaScript Fundamentals

## 1. What is JavaScript?

JavaScript (JS) is a high-level, interpreted programming language used mainly to make web pages interactive and dynamic.

### Quick facts

- Created in 1995 by Brendan Eich at Netscape
- Initially called Mocha, then LiveScript, later renamed JavaScript
- Standardized as ECMAScript (ES)
- Runs directly in the browser and allows you to control:
  - Button clicks
  - Form validation
  - Animations
  - Dynamic content updates
### Why JavaScript is used

JavaScript is used because it enables:

- Client-side interactivity (no page reload needed)
- Fast execution (runs in browser, no server needed for simple tasks)
- Rich UI/UX (animations, dynamic updates)
- Asynchronous operations (fetch data without blocking UI)
- Full-stack development (via Node.js)

### Question: Why not something else?

---

## 2. Adding JavaScript to HTML

### A) Inline JavaScript

```html
<button onclick="alert('Hi from JS')">Say Hi</button>
```

Use when: quick demos or learning. Avoid in real projects.

### B) Internal Script

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Internal JS Example</title>
  </head>
  <body>
    <button id="btn">Say Hi</button>

    <script>
      document.getElementById("btn").addEventListener("click", function () {
        alert("Hi from JS");
      });
    </script>
  </body>
</html>
```

Use when: small single-page demos where keeping everything in one file is fine.

### C) External JS File (Recommended)

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>External JS</title>
  </head>
  <body>
    <button id="btn">Say Hi</button>
    <script src="script.js"></script>
  </body>
</html>
```

script.js

```js
document.getElementById("btn").addEventListener("click", function () {
  alert("Hi from JS");
});
```

Use when: real projects, shared code, and cleaner separation of HTML and JS.

---

## 3. Browser Console

Use console for:

- Testing snippets quickly
- Viewing variable values
- Debugging errors

```js
console.log("Hello console");
console.warn("This is a warning");
console.error("This is an error");
```

---

## 4. Variables and Data Types

### Types of variables

- `let` - can be updated, block scoped
- `const` - cannot be updated, block scoped
- `var` - can be updated, function scoped (older way, avoid in modern code)
---

```js
Example:

let city = "Mumbai";     
const pi = 3.142; 
var oldWay = "legacy";  
```

### Data types

- `string` - text values like names
- `number` - integers and decimals
- `boolean` - true or false
- `undefined` - declared but not assigned yet
- `null` - intentionally empty value
- `object` - collections (arrays, objects, functions)
---

#### Note: Use `typeof` operator to find data type of given variable
---

```js
Example: 

let name = "Asha";
let age = 21;
let isStudent = true;
let marks = [78, 88, 92];
let profile = { name: "Asha", course: "FE" };

console.log(typeof profile);
```

---

## 5. Operators

Operators perform actions on values (numbers, strings, booleans, etc.).

### Arithmetic

Operators: `+` `-` `*` `/` `%` `**` `++` `--`

```js
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

### Assignment

Operators: `=` `+=` `-=` `*=` `/=` `%=` `**=`

```js
let total = 5;
total += 3; // 8
```

### Comparison

Operators: `==` `===` `!=` `!==` `>` `<` `>=` `<=`
---
**`===` (Strict Equality)**

- Compares value + data type
- No type conversion

**`==` (Loose Equality)**

- Compares values only
- Performs type conversion if types are different
---
```js
console.log(5 == "5");  // true (loose)
console.log(5 === "5"); // false (strict)
```

### Logical

Operators: `&&` `||` `!`

```js
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin); // false
```

### String (concatenation)

Operators: `+` `+=`

```js
let first = "Hello";
let last = "World";
console.log(first + " " + last); // "Hello World"
```


### Ternary

Operator: `condition ? valueIfTrue : valueIfFalse`

```js
let grade = score >= 60 ? "Pass" : "Fail";
```

### Type and membership

Operators: `typeof` `instanceof` `in` `delete`

```js
typeof 42; // "number"
```

### Bitwise (advanced)

Operators: `&` `|` `^` `~` `<<` `>>` `>>>`

### Operator reference table

| Operator | Example | What it does |
| --- | --- | --- |
| `+` | `2 + 3` | Adds numbers (result: `5`) |
| `-` | `5 - 2` | Subtracts numbers (result: `3`) |
| `*` | `4 * 2` | Multiplies numbers (result: `8`) |
| `/` | `10 / 2` | Divides numbers (result: `5`) |
| `%` | `10 % 3` | Remainder (result: `1`) |
| `**` | `2 ** 3` | Power (result: `8`) |
| `++` | `count++` | Add 1 after use |
| `--` | `count--` | Subtract 1 after use |
| `=` | `x = 5` | Assigns a value |
| `+=` | `x += 2` | Add and assign (`x = x + 2`) |
| `-=` | `x -= 2` | Subtract and assign |
| `*=` | `x *= 2` | Multiply and assign |
| `/=` | `x /= 2` | Divide and assign |
| `%=` | `x %= 2` | Remainder and assign |
| `**=` | `x **= 2` | Power and assign |
| `==` | `5 == "5"` | Loose equality (true) |
| `===` | `5 === "5"` | Strict equality (false) |
| `!=` | `5 != "5"` | Loose not equal (false) |
| `!==` | `5 !== "5"` | Strict not equal (true) |
| `>` | `7 > 3` | Greater than (true) |
| `<` | `2 < 5` | Less than (true) |
| `>=` | `5 >= 5` | Greater or equal (true) |
| `<=` | `4 <= 3` | Less or equal (false) |
| `&&` | `true && false` | AND (false) |
| `\|\|` | `true \|\| false` | OR (true) |
| `!` | `!true` | NOT (false) |
| `+` (string) | `"Hi" + "!"` | Joins strings (`"Hi!"`) |
| `+=` (string) | `msg += "!"` | Append to string |
| `?:` | `age >= 18 ? "Adult" : "Minor"` | Ternary condition |
| `typeof` | `typeof 42` | Returns type (`"number"`) |
| `instanceof` | `arr instanceof Array` | Checks object type |
| `in` | `"name" in profile` | Checks property exists |
| `delete` | `delete profile.age` | Removes a property |
| `&` | `5 & 1` | Bitwise AND |
| `\|` | `5 \| 1` | Bitwise OR |
| `^` | `5 ^ 1` | Bitwise XOR |
| `~` | `~5` | Bitwise NOT |
| `<<` | `1 << 2` | Left shift |
| `>>` | `4 >> 1` | Right shift (signed) |
| `>>>` | `4 >>> 1` | Right shift (unsigned) |

---

## 6. Control Flow and Functions

### 1. Conditional Statements
---
**if - else if - else**

```js
let score = 72;
if (score >= 75) {
  console.log("Distinction");
} else if (score >= 60) {
  console.log("First Class");
} else {
  console.log("Pass");
}
```
---
**switch**

Best when checking a single variable against many specific values. Uses strict equality (`===`). Always remember the `break` statement, or code falls through to the next case.

```js
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}
```
---
**Ternary Operator (`? :`)**
A one-line shorthand for a simple if/else. Great for assigning variables based on a condition.

```js
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
```

### 2. Standard Loops (Iteration)

These repeat a block of code as long as a condition is met.

---

**for**

The traditional loop. Best when you know exactly how many times you want to iterate.

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0 to 4
}
```

---

**while**

Best when you don't know the exact number of iterations, but want to keep looping until a condition becomes false.

```js
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```

---

**do...while**

Similar to `while`, but it guarantees the code block will execute at least once, even if the condition is false from the start.

```js
let x = 10;
do {
  console.log("This runs once");
} while (x < 5);
```

---

### 3. Data Structure Loops (ES6+)

Specialized loops for iterating through objects and arrays.

---

**for...of (For Values)**

Used to iterate over iterable objects like Arrays, Strings, Maps, and Sets. It grabs the value.

```js
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color); // "red", then "green", then "blue"
}
```

---

**for...in (For Keys/Properties)**

Used to iterate over the enumerable properties (keys) of an Object.

```js
const user = { name: "John", age: 25 };

for (const key in user) {
  console.log(`${key}: ${user[key]}`); // "name: John", then "age: 25"
}
```

---

### 4. Jump Statements (Control Modifiers)

These allow you to break out of standard control flows or skip iterations.

---

**break**

Instantly exits the entire loop or switch statement it is currently inside.

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) break; 
  console.log(i); // Prints 0, 1, 2, then stops completely.
}
```

---

**continue**

Skips the rest of the current iteration and instantly jumps to the next cycle of the loop.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // Prints 0, 1, 3, 4 (skips 2)
}
```

---

**return**

Exits a function entirely and (optionally) passes a value back to wherever the function was called.

---

### 5. Error Handling

Controls the flow when something goes wrong, preventing the entire application from crashing.

---

**try / catch / finally and throw**

Attempts to run code. If it fails, the execution instantly jumps to the catch block. The finally block runs no matter what happens.

```js
try {
  let data = null; // Simulated failure
  if (!data) throw new Error("Data is empty!"); // Custom error trigger
  
  console.log("This only runs if no error occurred.");
} catch (error) {
  // ...execution jumps here immediately.
  console.log("Caught an error:", error.message);
} finally {
  console.log("This runs at the very end, success or fail.");
}
```

---

### 6. Functions

Functions are reusable blocks of code. There are 3 main ways to write them in modern JavaScript.

---

**1. Regular Functions (Function Declarations)**

- **How it works:** Defined using the `function` keyword with a name.
- **Key difference:** They are "hoisted", meaning you can call them *before* they are defined in your code.
- **When to use:** Use as your default, especially for global helper functions.

```js
console.log( add(4, 6) ); 

function add(x, y) {
  return x + y;
}
```

---

**2. Function Expressions**

- **How it works:** A function without a name (anonymous) stored inside a variable.
- **Key difference:** They are *not* hoisted. You must define them before you call them.
- **When to use:** When you want to limit where a function can be used, or when passing a function as an argument to another function.

```js
const multiply = function(x, y) {
  return x * y;
};

console.log( multiply(4, 6) ); 
```

---

**3. Arrow Functions (ES6+)**

- **How it works:** A shorter syntax for function expressions.
- **Key difference:** No `function` keyword. If it's a simple one-liner, you can skip the `{}` brackets and the `return` keyword (implicit return). They also handle the `this` keyword differently (important later for React/Objects).
- **When to use:** Perfect for short callbacks (like array map/filter) and methods inside modern frameworks.

```js
const subtract = (x, y) => {
  return x - y;
};

const square = (n) => n * n;

console.log(square(5)); // 25
```

---

## 7. Arrays and Methods

```js
let fruits = ["apple", "banana", "mango"];

fruits.push("orange");
fruits.pop();

console.log(fruits.includes("banana"));
```

Useful methods:

- push, pop
- shift, unshift
- map
- filter
- find
- forEach

```js
const marks = [45, 76, 89, 32, 91];

const passed = marks.filter((m) => m >= 50);
const bonusMarks = marks.map((m) => m + 5);

console.log(passed);
console.log(bonusMarks);
```

---

## 8. Objects

```js
const student = {
  name: "Amit",
  branch: "Computer",
  sem: 2,
  isPlaced: false,
  greet: function () {
    return `Hello, I am ${this.name}`;
  },
};

console.log(student.name);
console.log(student.greet());
```

Update object values:

```js
student.isPlaced = true;
student.city = "Mumbai";
```


---
Next: [2 - DOM Basics and Manipulation →](02-dom-basics.md)