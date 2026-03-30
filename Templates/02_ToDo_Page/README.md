# To-Do App Project

Your task is to use the **DOM Manipulations** you've learned to make the app interactive!

## Overview of your Goals
When a user clicks the "Add Task" button (which has `onclick="addTask()"` in the HTML):
1. Read the text from the input box.
2. Create a new "card" holding the task text and a "Remove" button.
3. Allow the task to be marked as complete when clicked.
4. Allow the card to be deleted when "Remove" is clicked.
5. Add the card to the To-Do list on the screen.

---

## Step-by-Step Instructions

Open your `script.js` file and follow these steps:

### Step 1: Select the Required Elements
At the very top of your file, use `document.getElementById` to grab the two elements you'll need to interact with:
- The input field (its ID is `todo-input`)
- The container for the list (its ID is `todo-list`)

Store these in `const` variables, like so:
```javascript
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
```

### Step 2: Create the `addTask` Function
In the `index.html` file, the Add Task button has an `onclick="addTask()"` attribute. You need to define this function in your JavaScript:
```javascript
function addTask() {
    // All of the steps below will happen inside this function!
}
```

### Step 3: Get the Input Value
Inside `addTask()`, get what the user typed by accessing `input.value`.
*Hint: If the text is empty (`""`), you should `return;` so it doesn't create a blank task.*

### Step 4: Create the Card Element
Use `document.createElement('div')` to create a new `div`. 
Give it the class name `'card'` using `classList.add('card')`.

### Step 5: Create the Task Text
Use `document.createElement('span')` to create a text container.
1. Give it the class name `'task-text'`.
2. Set its `textContent` to the text you got from the input box in Step 3.
3. **Bonus interaction**: Add an `onclick` function to this span. Inside that function, toggle the class `'completed'` on the main card div. This gives it a cool strikethrough effect!
   ```javascript
   textSpan.onclick = function() {
       card.classList.toggle('completed');
   };
   ```

### Step 6: Create the Remove Button
Use `document.createElement('button')` to create the delete button.
1. Give it the class name `'delete-btn'`.
2. Set its text (like "Remove") using `textContent`.
3. Add an `onclick` function to this button. Inside that function, call `.remove()` on your card variable to delete it from the screen.

### Step 7: Put it All Together (Append Elements)
Now that you have your `textSpan` and `deleteBtn` ready:
1. Append the text span to the card: `card.appendChild(textSpan)`
2. Append the delete button to the card.
3. Append the shiny new card to the `todoList` element you selected in Step 1.

### Step 8: Clean Up
Finally, set `input.value = ''` at the very end of your function so the input box clears automatically after adding a task!

---

**Good luck! Once you finish, open `index.html` in your browser and test out your fully functioning To-Do application!**