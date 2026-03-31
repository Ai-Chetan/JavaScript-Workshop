// Solution for Student Grades Analyzer

const students = [
    { name: "Amit", score: 42 },
    { name: "Rohit", score: 85 },
    { name: "Priya", score: 55 },
    { name: "Neha", score: 91 },
    { name: "Rahul", score: 38 }
];

console.log("Original Students Data:", students);

// --- TASK 1: The map() Method ---
const studentsWithBonus = students.map(student => {
    return {
        name: student.name,
        score: student.score + 5
    };
});
console.log("With Bonus Marks:", studentsWithBonus);


// --- TASK 2: The filter() Method ---
const passedStudents = studentsWithBonus.filter(student => student.score >= 50);
console.log("Passed Students:", passedStudents);


// --- TASK 3: Standard Loops ---
let totalScore = 0;

for (const student of studentsWithBonus) {
    totalScore += student.score;
}

const classAverage = totalScore / studentsWithBonus.length;
console.log("Class Average:", classAverage);


// --- TASK 4: Control Flow and Functions ---
function getLetterGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else if (score >= 50) {
        return 'C';
    } else {
        return 'F';
    }
}

console.log("Average Letter Grade:", getLetterGrade(classAverage));