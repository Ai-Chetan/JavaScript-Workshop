[← README File](../README.md)

# Module 2 - DOM Basics and Manipulation


## 1. What is DOM?

DOM means Document Object Model.

- Browser converts HTML into a tree structure.
- Each HTML element becomes a node.
- JavaScript can access and modify these nodes.

Simple tree idea:

- document
- html
- head and body
- body children (h1, p, div, button, etc.)
---
See Visualization here: `https://bioub.github.io/dom-visualizer/`

---

## 2. Selecting Elements

### getElementById

```js
const title = document.getElementById("main-title");
console.log(title);
```

### querySelector

Returns first matching element.

```js
const firstItem = document.querySelector(".item");
```

### querySelectorAll

Returns NodeList of all matches.

```js
const allItems = document.querySelectorAll(".item");
allItems.forEach((item) => console.log(item.textContent));
```

---

## 3. Reading and Changing Content

### textContent

Use for plain text.

```js
const msg = document.getElementById("message");
msg.textContent = "Welcome Students";
```

### innerHTML

Use when inserting HTML structure.

```js
const box = document.getElementById("box");
box.innerHTML = "<strong>Bold text</strong>";
```

Note: Avoid using user input directly inside innerHTML.

---

## 4. Changing CSS and Class Names

### Inline style changes

```js
const card = document.querySelector(".card");
card.style.backgroundColor = "lightyellow";
card.style.padding = "16px";
```

### classList operations

```js
card.classList.add("highlight");
card.classList.remove("hidden");
card.classList.toggle("active");
```

---

## 5. Creating DOM Elements Dynamically

```js
const list = document.getElementById("todo-list");

const li = document.createElement("li");
li.textContent = "Learn DOM Manipulation";

list.appendChild(li);
```

Add multiple items from array:

```js
const topics = ["Selectors", "Content", "Styles"];
const container = document.getElementById("topics");

for (const topic of topics) {
  const p = document.createElement("p");
  p.textContent = topic;
  container.appendChild(p);
}
```

---

## 6. Removing Elements Dynamically

```js
const oldNote = document.getElementById("old-note");
oldNote.remove();
```

Or remove child:

```js
const list = document.getElementById("todo-list");
if (list.firstElementChild) {
  list.removeChild(list.firstElementChild);
}
```

---

## 7. Complete Demo

index.html

```html
<h2 id="main-title">DOM Demo</h2>
<p id="message">Old message</p>
<button id="updateBtn">Update</button>
<ul id="todo-list"></ul>
```

script.js

```js
const title = document.getElementById("main-title");
const message = document.getElementById("message");
const button = document.getElementById("updateBtn");
const list = document.getElementById("todo-list");

button.addEventListener("click", () => {
  title.textContent = "DOM Updated";
  message.innerHTML = "<em>Content changed successfully</em>";

  const li = document.createElement("li");
  li.textContent = "New item added";
  list.appendChild(li);
});
```

---

## defer attribute

```html
<script src="script.js" defer></script>
```

---
Prev: [Module 1 - JavaScript Fundamentals](01-javascript-fundamentals.md) | Next: [Module 3 - Events and Form Handling](03-events-forms.md)