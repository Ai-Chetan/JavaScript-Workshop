# Student Grades Analyzer

In this exercise, you will practice pure JavaScript logic using **Module 1**: Variables, Control Flow, Loops, Functions, Arrays, and Objects.

All output will be strictly in the Browser Console!


## The Tasks

Before you begin: Open `index.html` in your browser, Right-click anywhere, select **Inspect**, and switch to the **Console** tab so you can see your `console.log()` statements print!

### Task 1: Arrays and `.map()`
You're starting with an array of objects.
Write a `.map()` function that adds 5 bonus marks to every single student's score and saves this new array to a variable `studentsWithBonus`.

### Task 2: Arrays and `.filter()`
Now that everyone has bonus marks, who passed? A passing score is `50` or higher.
Use `.filter()` to create an array of `passedStudents`.

### Task 3: Iteration with Standard Loops
Let's find out the overall class average (using the new bonus scores).
1. Initialize a `let totalScore = 0` variable.
2. Use a `for` or `for...of` loop to iterate through the array, adding up everyone's score.
3. Divide the total by the number of students (hint: you can check how many students there are using the `.length` property of the array).

### Task 4: Functions and Control Flow (`if/else`)
We want to assign a letter grade instead of just a number.
Write a function `getLetterGrade(score)` that takes a number as an argument and returns:
- `'A'` if the score is $\ge$ `80`
- `'B'` if the score is $\ge$ `60`
- `'C'` if the score is $\ge$ `50`
- `'F'` if the score is $\lt$ `50`

Last, call that function passing your `classAverage` from Task 3 to see the average class letter grade!