// Datele pentru graficul cu distributia
const revenueData = {
    labels: ['Consultanță IT', 'Dezvoltare Software', 'ERP', 'Securitate Cibernetică', 'Cloud Computing'],
    datasets: [{
        label: 'Distribuția Cifrei de Afaceri',
        data: [35, 20, 15, 10, 20], 
        backgroundColor: ['#3498db', '#9b59b6', '#2ecc71', '#f39c12', '#e74c3c'],
        borderColor: ['#2980b9', '#8e44ad', '#27ae60', '#f39c12', '#c0392b'],
        borderWidth: 1
    }]
};

// Graficul distributia cifrei
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
new Chart(ctxRevenue, {
    type: 'pie',
    data: revenueData
});

// Datele pentru graficul cresterea cifrei
const growthData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Creșterea Cifră de Afaceri',
        data: [50, 55, 60, 65, 70], 
        borderColor: '#3498db',
        fill: false,
        tension: 0.1
    }]
};

// Graficul cresterea cifrei
const ctxGrowth = document.getElementById('growthChart').getContext('2d');
new Chart(ctxGrowth, {
    type: 'line',
    data: growthData
});
