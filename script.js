const timeSavedCtx = document.getElementById('timeSavedChart').getContext('2d');
new Chart(timeSavedCtx, {
  type: 'bar',
  data: {
    labels: ['Grading', 'Scheduling', 'Record Management'],
    datasets: [{
      label: 'Hours Saved Per Week',
      data: [5, 3, 4],
      backgroundColor: ['#fcd7d4 ', '#ffedc2', '#c2e9ff']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const adoptionCtx = document.getElementById('adoptionChart').getContext('2d');
new Chart(adoptionCtx, {
  type: 'pie',
  data: {
    labels: ['60% Adopted', '40% Not Adopted'],
    datasets: [{
      data: [60, 40],
      backgroundColor: ['#95bd80', '#ad240c']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
  }
});


const adoptionTrendCtx = document.getElementById('adoptionTrendChart').getContext('2d');
new Chart(adoptionTrendCtx, {
  type: 'line',
  data: {
    labels: ['2019', '2020', '2021', '2022', '2023'], 
    datasets: [{
      label: 'AI Adoption (%)',
      data: [30, 40, 50, 60, 75], 
      fill: false,   
      borderColor: '#b0f58c', 
      tension: 0.1, 
      borderWidth: 3, 
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, 
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }
});

