// Data Visualizer Exercise

async function createChart() {
    
    // --- TASK 1: Fetch the Data ---
    // Use the fetch() API to get the information out of 'data.json'
    // Remember to 'await' the result!
    // const response = await fetch("...");
    // const data = await response...;


    // --- TASK 2: Extract Labels and Values ---
    // Chart.js can't read an array of objects directly. It needs two separate arrays.
    // Use the .map() array method to pull out the right data!
    
    // a. Get just the names of the languages (e.g., "JavaScript", "Python")
    // const labels = data.map(item => item.language);

    // b. Get just the user count numbers (e.g., 1200, 1050)
    // const values = data.map(...);


    // --- TASK 3: Select the Canvas ---
    // Look in index.html to find the `<canvas>` tag and its ID.
    // Use getElementById() to get the canvas element.
    // const canvas = document.getElementById("...");


    // --- TASK 4: Draw the Chart ---
    // Pass in the `canvas` you made in Task 3, and supply your `labels` and `values` variables.
    
    // new Chart(canvas, {
    //     // 1. The Type ('bar', 'pie', 'doughnut', or 'line')
    //     type: 'bar',
        
    //     // 2. The Data
    //     data: {
    //         labels: labels, // Insert your assigned 'labels' array here!
    //         datasets: [{
    //             label: 'Number of Users',
    //             data: values, // Insert your assigned 'values' array here!
                
    //             // Color styling! Feel free to edit this array.
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.6)', // Red
    //                 'rgba(54, 162, 235, 0.6)', // Blue
    //                 'rgba(255, 206, 86, 0.6)', // Yellow
    //                 'rgba(75, 192, 192, 0.6)', // Green
    //                 'rgba(153, 102, 255, 0.6)' // Purple
    //             ]
    //         }]
    //     }
    // });
}

// Call the function so the chart actually renders!
createChart();