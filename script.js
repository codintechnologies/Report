// Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Revenue ($K)',
      data: [120, 150, 170, 200],
      borderColor: 'rgba(46, 204, 113, 1)',
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      fill: true,
      tension: 0.3
    }]
  }
});

// Profit Chart
const profitCtx = document.getElementById('profitChart').getContext('2d');
new Chart(profitCtx, {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Profit ($K)',
      data: [50, 70, 80, 100],
      backgroundColor: 'rgba(52, 152, 219, 0.7)'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  }
});
