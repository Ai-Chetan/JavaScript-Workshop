// Student Grades Analyzer

// 1. Provided Data: Array of Objects
const students = [
    { name: "Amit", score: 42 },
    { name: "Rohit", score: 85 },
    { name: "Priya", score: 55 },
    { name: "Neha", score: 91 },
    { name: "Rahul", score: 38 }
];

console.log("Original Students Data:", students);

// --- TASK 1: The map() Method ---
// The exam was tough, so the teacher is giving everyone 5 bonus marks.
// Uncomment the code below and use .map() to create a new array of objects where the 'score' is increased by 5.

// const studentsWithBonus = students.map((student) => {
//    // Write your code here to return a new object with the updated score
// });
// console.log("With Bonus Marks:", studentsWithBonus);


// --- TASK 2: The filter() Method ---
// A passing score is 50 or above (AFTER the grace marks!). 
// Uncomment the code below and use .filter() on your 'studentsWithBonus' array to only keep students who passed.

// const passedStudents = studentsWithBonus.filter((student) => {
//    // Write your condition here to return true if student.score is >= 50
// });
// console.log("Passed Students:", passedStudents);


// --- TASK 3: Standard Loops ---
// What is the class average now?
// Uncomment the code below and use a 'for' or 'for...of' loop to calculate the total sum of all scores in 'studentsWithBonus'.
// Then divide by the number of students to find the average.

// let totalScore = 0;
// for ( ... ) {
//     // Add student.score to totalScore
// }
// const classAverage = ...;
// console.log("Class Average:", classAverage);


// --- TASK 4: Control Flow and Functions ---
// Uncomment the function below and write logic that takes a numerical score and returns a Letter Grade using if/else or a switch statement:
// >= 80: 'A', >= 60: 'B', >= 50: 'C', < 50: 'F'

// function getLetterGrade(score) {
//     // Write your if/else logic here
// }
// console.log("Average Letter Grade:", getLetterGrade(classAverage));