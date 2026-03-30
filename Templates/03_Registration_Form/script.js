// Events & Form Validation Exercise

// --- TASK 1: Select the necessary elements from the DOM ---
// Grab all the input fields, the form itself, and the paragraph tags where we show messages.
// Check index.html for their specific IDs!

// const form = document.getElementById("...");
// const nameInput = document.getElementById("...");
// const emailInput = document.getElementById("...");
// const yearInput = document.getElementById("...");

// const errorMessage = document.getElementById("errorMessage");
// const successMessage = document.getElementById("successMessage");


// --- TASK 2: Listen for the "submit" event on the form ---
form.addEventListener("submit", function(event) {
    
    // --- TASK 3: Prevent Default Behavior ---
    // Prevent the page from reloading unconditionally on submit
    // event.preventDefault();


    // --- TASK 4: Reset UI ---
    // Clear out any messages from previous submit attempts
    // errorMessage.textContent = "";
    // successMessage.textContent = "";


    // --- TASK 5: Clean and Extract Data ---
    // Get the data from the inputs. Use .trim() for strings to remove accidental blank spaces.
    // Convert the year input to a Number!
    
    // const nameValue = nameInput...
    // const emailValue = emailInput...
    // const yearValue = Number(yearInput.value);


    // --- TASK 6: Validation Logic ---

    // a. Check if ANY of the fields are empty. If so, show an error and stop the function.
    // if (!nameValue || !emailValue || !yearInput.value) {
    //     errorMessage.textContent = "Please fill out all fields!";
           // Stops the function execution immediately using the 'return' statement
    // }
    
    // b. Check if the year is outside the valid range (1 to 4)
    // if (yearValue < 1 || yearValue > 4) {
    //     errorMessage.textContent = "Year of study must be between 1 and 4!";
    //     return;
    // }

    // c. (Bonus) Check if the email looks somewhat valid (contains an "@" symbol)
    // if (!emailValue.includes("@")) {
    //     errorMessage.textContent = "Please enter a valid email address.";
    //     return;
    // }


    // --- TASK 7: Success Flow ---
    // If the code made it this far, all validation checks passed! 
    
    // Show a success message welcoming them by name!
    // successMessage.textContent = `Welcome to the club, ${nameValue}!`;
    
    // Clear out the form inputs using the built-in reset form method
    // form.reset();

});