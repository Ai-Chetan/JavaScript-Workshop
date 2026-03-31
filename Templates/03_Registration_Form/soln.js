// Solution for Events & Form Validation Exercise

// 1. Select the necessary elements
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("studentEmail");
const yearInput = document.getElementById("studyYear");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

// 2. Add Event Listener to form
form.addEventListener("submit", function(event) {
    // 3. Prevent form submission (page reload)
    event.preventDefault();

    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // 4. Get the values from the inputs
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const yearValue = Number(yearInput.value);

    // 5. Validation Logic
    if (!nameValue || !emailValue || !yearInput.value) {
        errorMessage.textContent = "Please fill out all fields.";
        return; 
    }

    if (yearValue < 1 || yearValue > 4) {
        errorMessage.textContent = "Please enter a valid year between 1 and 4.";
        return;
    }

    if (!emailValue.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address containing '@'.";
        return;
    }

    // 6. Success!
    successMessage.textContent = `Welcome to the club, ${nameValue}! Your registration is complete.`;
    
    // Clear the form
    form.reset();
});

// Bonus: Hover event listener to show mouseover usage
const btn = document.getElementById("submitBtn");
btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.02)";
});
btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
});