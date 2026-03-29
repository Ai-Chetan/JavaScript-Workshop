[← README File](../README.md)

# Module 4 - JSON and Chart.js

## 1. What is JSON?

JSON means JavaScript Object Notation.

- Lightweight data format
- Easy for humans to read
- Easy for JavaScript to parse

JSON rules:

- Keys must be in double quotes
- Strings must be in double quotes
- No functions in pure JSON

Example JSON object:

```json
{
  "name": "Riya",
  "age": 21,
  "isStudent": true
}
```

---

## 2. JSON Array Example

```json
[
  { "subject": "Math", "marks": 78 },
  { "subject": "Science", "marks": 88 },
  { "subject": "English", "marks": 72 }
]
```

Use in JS:

```js
const marksData = [
  { subject: "Math", marks: 78 },
  { subject: "Science", marks: 88 },
  { subject: "English", marks: 72 },
];

marksData.forEach((item) => {
  console.log(item.subject, item.marks);
});
```

---

## 3. Parse and Stringify

| Method | Action | Example |
| --- | --- | --- |
| `JSON.stringify()` | Converts a JS Object $\rightarrow$ JSON String | Sending data to a server. |
| `JSON.parse()` | Converts a JSON String $\rightarrow$ JS Object | Reading data from an API. |
---
```js
const userObj = { name: "Anil", city: "Nashik" };
const jsonText = JSON.stringify(userObj);
console.log(jsonText);

const parsedObj = JSON.parse(jsonText);
console.log(parsedObj.name);
```
---

## 4. Basic fetch Example

Use only if reading JSON from file/API.

```js
async function loadData() {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);
}

loadData();
```

---
# Chart.js

## 5. What is Chart.js?

Chart.js is a free library that takes your plain data (like arrays or JSON) and turns it into beautiful, interactive graphs. It draws these charts inside an HTML `<canvas>` element.

---

## 6. Setup (The Fastest Way)

To use it, just add this script tag inside your HTML `<head>` or before the closing `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

---

## 7. The "Anatomy" of a Chart

At first glance, Chart.js code looks huge. But every chart is actually just made of **3 core pieces** packed into one object:

1. **`type`**: What kind of chart? (`'bar'`, `'line'`, `'pie'`, `'doughnut'`)
2. **`data`**: What are we drawing? 
   - `labels`: The text categories across the bottom (e.g., Math, Science)
   - `datasets`: The actual numerical data and colors.
3. **`options`**: Extra tweaks (like forcing the Y-axis to start at 0).

---

## 8. Step-by-Step Example

Let's convert a simple JSON array into a Bar Chart.

**Step 1: Create the HTML Canvas**  
This is the blank area where the chart will be drawn.

```html
<canvas id="marksChart" width="400" height="200"></canvas>
```

**Step 2: Prepare the Data in JavaScript**  
Chart.js requires flat arrays (lists) for its X and Y axes. We use `.map()` to split our JSON into those arrays.

```js
// 1. Your data (maybe fetched from an API)
const studentData = [
  { subject: "Math", marks: 78 },
  { subject: "Science", marks: 88 },
  { subject: "English", marks: 72 }
];

// 2. Separate them into two arrays for Chart.js
const chartLabels = studentData.map(item => item.subject); // ["Math", "Science", "English"]
const chartValues = studentData.map(item => item.marks);   // [78, 88, 72]
```

**Step 3: Draw the Chart!**  
Grab the `<canvas>`, define the 3 core pieces (`type`, `data`, `options`), and let Chart.js do the heavy lifting!

```js
const ctx = document.getElementById("marksChart").getContext("2d");

new Chart(ctx, {
  type: "bar",   // 1. The Type
  
  data: {        // 2. The Data
    labels: chartLabels, 
    datasets: [{
      label: "Student Marks",
      data: chartValues,
      backgroundColor: "rgba(54, 162, 235, 0.6)", // Solid Blue bars
      borderColor: "rgba(54, 162, 235, 1)",       // Dark border
      borderWidth: 1
    }]
  },
  
  options: {     // 3. The Options
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Forces chart to start at 0 instead of lowest mark
        max: 100           // Optional: ceiling of the chart
      }
    }
  }
});
```

---
Prev: [Module 3 - Events and Form Handling](03-events-forms.md) | Next: [Module 5 - Capstone Project](05-capstone-project.md)
