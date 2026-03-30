# Data Visualizer Task

In this exercise, you will practice fetching data from a JSON file and rendering it on a webpage using **Chart.js**. By the end of this task, you will have a working bar chart displaying the popularity of various programming languages!

---

## 🚀 Step-by-Step Guide

### Step 0: Start a Local Server
Because we are using `fetch()` to load a local JSON file (`data.json`), you **must** serve your files through a local web server to avoid CORS (Cross-Origin Resource Sharing) errors.
1. Open up VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Step 1: Fetch the Data
Open `script.js`. Your first goal is to load the information from `data.json`.
- Inside the `createChart()` function, uncomment the fetch code block.
- Use `fetch("data.json")` to make the network request.
- Remember to use `await` to wait for the response, and then use `await response.json()` to convert it into a JavaScript array of objects that you can work with.

### Step 2: Prepare the Data for Chart.js
Chart.js cannot read arrays of objects directly. It needs two separate "flat" lists (arrays) for the X and Y axes:
1. **Labels:** An array of just the language names (e.g., `["JavaScript", "Python", ...]`).
2. **Values:** An array of just the numbers (e.g., `[1200, 1050, ...]`).

**Hint:** Use the `.map()` method to loop over the fetched data array!
```javascript
// Example of mapping out just the language names:
const labels = data.map(item => item.language);
```

### Step 3: Select the Canvas
To draw a chart, Chart.js needs to know *where* to draw it.
- Look in `index.html` to find the `id` of the `<canvas>` element (it is `myChart`).
- Use `document.getElementById("myChart").getContext("2d")` to get the drawing context.

### Step 4: Create the Chart
Now for the fun part! Unleash Chart.js by creating a `new Chart(ctx, { ... })`.
- **type:** Set this to `'bar'` (or try `'pie'`, `'line'`, `'doughnut'`!).
- **data:** Pass the `labels` array you created into the `labels` property.
- **datasets:** Inside the datasets array, pass your `values` array into the `data` property. You can also customize `label`, `backgroundColor`, and `borderColor` here.
- **options:** We have provided some default options to ensure the Y-axis starts at zero (`beginAtZero: true`) and the chart behaves responsively.

---

## 🌟 Bonus Challenges
Once you have the bar chart working, try these modifications:
1. **Change the Chart Type:** Switch `'bar'` to `'pie'` or `'doughnut'`. How does the chart layout look now?
2. **Try Multiple Colors:** Pass an array of colors to `backgroundColor` instead of a single solid color string.
3. **Add Data:** Open `data.json` and add 3 new programming languages of your choice. Refresh your page—the chart should pull in the new data automatically!