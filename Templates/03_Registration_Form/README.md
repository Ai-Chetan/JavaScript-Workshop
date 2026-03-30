# Events & Form Validation Task

In this exercise, you will practice capturing user input, handling the `submit` event, stopping the default page reload, and creating conditional validaton logic. This reinforces the concepts taught in **Module 3**.

---

## 🚀 Step-by-Step Guide

### Step 1: Select Your Elements
Open `script.js`. First, you need to use `document.getElementById()` to grab all your inputs, the form itself, and the paragraph tags where we will display our messages. 

### Step 2: Listen for the Submission
We want our code to run *exactly* when the user clicks "Register" or presses Enter.
Attach an `.addEventListener("submit", function(event) { ... })` onto your `form` variable.

### Step 3: Prevent Page Reload
By default, forms try to refresh the page to send data to a separate server. We want to handle the data here in JavaScript! Inside your function, write `event.preventDefault()`. Don't forget this!

### Step 4: Harvest the Data
Grab the text out of the inputs. Use `element.value`. 
*Pro tip:* use `.trim()` on text fields so you don't accidentally accept a bunch of blank spaces as a valid name!

### Step 5: Time to Validate
Write some simple `if` statements. 
- Are any fields blank?
- Is the Year less than 1 or greater than 4?
If any rule fails, update the text inside your `errorMessage` element and write `return;` so the rest of your function stops running!

### Step 6: Celebrate!
If your code makes it past all the `if` checks, that means the user filled it out right! Write a message to `successMessage.textContent` and optionally run `form.reset()` to clear the boxes.

---

## 🌟 Bonus Challenges
1. **Email Validation:** Can you add an `if` statement to check if the `emailValue.includes("@")`? If it doesn't, show an error!
2. **Button Animation:** In the markdown module, we covered `mouseover`. Add a `mouseover` event listener to your Submit button (`btn`) to add a cool hover effect (`btn.style.transform = "scale(1.05)"`). Don't forget to restore the scale on `mouseout`!