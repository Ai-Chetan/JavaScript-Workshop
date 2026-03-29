[← README File](../README.md)

# Module 3 - Events and Form Handling

         
## 1. What is an Event?

An event is an action that happens in browser:

- User clicks a button
- User types in input
- Mouse moves over element
- Form is submitted

JavaScript listens and responds.

---

## 2. addEventListener Basics

```js
const btn = document.getElementById("saveBtn");

btn.addEventListener("click", function () {
  console.log("Button clicked");
});
```

Common events:

- click
- keyup
- submit
- mouseover
- change

---

## 3. Event Object Essentials

```js
const input = document.getElementById("nameInput");

input.addEventListener("keyup", function (event) {
  console.log("Typed:", event.target.value);
  console.log("Key pressed:", event.key);
});
```

Useful event properties:

- event.target
- event.target.value
- event.key
- event.type

---

## 4. click and mouseover Examples

```js
const card = document.getElementById("profileCard");
const statusText = document.getElementById("status");

card.addEventListener("mouseover", () => {
  statusText.textContent = "Mouse is over card";
});

card.addEventListener("click", () => {
  statusText.textContent = "Card clicked";
});
```

---

## 5. Form Handling Basics

HTML:

```html
<form id="studentForm">
  <input type="text" id="studentName" placeholder="Enter name" />
  <input type="number" id="studentAge" placeholder="Enter age" />
  <button type="submit">Submit</button>
</form>
<p id="result"></p>
```

JS:

```js
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const ageInput = document.getElementById("studentAge");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const age = Number(ageInput.value);

  if (!name || age <= 0) {
    result.textContent = "Please enter valid details.";
    return;
  }

  result.textContent = `Saved: ${name}, Age ${age}`;
  form.reset();
});
```

---

## 6. Simple Validation Pattern

Validation checklist:

- Required fields not empty
- Number fields are valid ranges
- Show clear error message near field
- Prevent submit if invalid

Example helper:

```js
function showError(message) {
  const err = document.getElementById("error");
  err.textContent = message;
}
```
Prev: [Module 2 - DOM Basics and Manipulation](02-dom-basics.md) | Next: [Module 4 - JSON and Chart.js](04-json-chartjs.md)
