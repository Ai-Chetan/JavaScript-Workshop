// Solution for Data Visualizer

async function createChart() {
    try {
        // 1. Fetch data
        const response = await fetch("data.json");
        const data = await response.json();

        // 2. Extract labels and values
        const labels = data.map(item => item.language);
        const values = data.map(item => item.users);

        // 3. Select canvas context
        const canvas = document.getElementById("myChart");

        // 4. Render Chart
        new Chart(canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Users',
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)', // Red
                        'rgba(54, 162, 235, 0.6)', // Blue
                        'rgba(255, 206, 86, 0.6)', // Yellow
                        'rgba(75, 192, 192, 0.6)', // Green
                        'rgba(153, 102, 255, 0.6)' // Purple
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error("Error fetching or plotting data:", error);
    }
}

createChart();