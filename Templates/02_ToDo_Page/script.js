// DOM Basics - To-Do App

// --- TASK 1: Select the DOM Elements ---
// Grab the input box and the empty container div from the HTML.
// Use document.getElementById() to find an element by its ID.
// Look at index.html if you don't know the IDs!

// const input = document.getElementById("...");
// const todoList = document.getElementById("...");


// --- TASK 2: Create a function to add a new task ---
// This function will run every time we click the "Add Task" button.
function addTask() {
    
    // a. Get the text that the user typed in the input box using .value
    // Use .trim() to remove extra blank spaces.
    // const taskText = input...;


    // b. Validate: If the taskText is empty (""), stop the function right here!
    // if (taskText === "") {
    //     return;
    // }


    // c. Create a new wrapping <div> element for the whole To-do "Card"
    // Use document.createElement()
    // const card = document.createElement("...");
    
    // Give our new card a CSS class so it looks nice! 
    // card.classList.add("card");


    // d. Create a <span> to hold the actual text. Give it the class 'task-text'
    // const textSpan = document.createElement("...");
    // textSpan.classList.add("task-text");
    
    // Put the text the user typed (taskText) inside our new span!
    // textSpan.textContent = ...;


    // e. Toggle completed on click
    // Notice how easily we can add event listeners to elements we just created!
    // textSpan.onclick = function() {
    //     card.classList.toggle("completed");
    // };


    // f. Create a small <button> element to delete a task
    // const deleteBtn = document.createElement("...");
    // deleteBtn.classList.add("delete-btn");
    // deleteBtn.textContent = "Remove";


    // g. Remove the entire card from the DOM when the delete button is clicked
    // Use the .remove() method!
    // deleteBtn.onclick = function() {
    //     card.remove(); 
    // }


    // h. Combine them all together!
    // Append the textSpan and the deleteBtn *inside* the card div
    // card.appendChild(...);
    // card.appendChild(...);
    
    // Append the full card *inside* the main todoList container
    // todoList.appendChild(...);


    // i. Finally, clear the input box so you can type a new task easily
    // input.value = "";
}