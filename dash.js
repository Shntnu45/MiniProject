//navbar toggle code 
const menuToggle = document.getElementById("menuToggle");
const navContainer = document.getElementById("navContainer");

menuToggle.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

//popup for dashboard
const modal = document.getElementById("dashboardModal");
const modalTitle = document.getElementById("dashboardTitle");
const closeBtn = document.querySelector(".close");
const dashboardContent = document.getElementById("dashboardContent");

let chartInstance = null;

const cards = document.querySelectorAll(".card");



// Sample chart data for  dashboard
const dashboardsData = {
  "Sales Overview": {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{ label: 'Sales', data: [120, 190, 300, 250, 400], backgroundColor: '#00bcd4' }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  },
  "Revenue Insights": {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{ label: 'Revenue', data: [5000, 7000, 6000, 8000], borderColor: '#00bcd4', fill: false }]
    },
    options: { responsive: true }
  },
  "Customer Retention": {
    type: 'doughnut',
    data: {
      labels: ['Retained', 'Churned'],
      datasets: [{ label: 'Customers', data: [75, 25], backgroundColor: ['#00bcd4', '#ff5252'] }]
    },
    options: { responsive: true }
  },
  "Product Performance": {
    type: 'bar',
    data: {
      labels: ['Product A', 'Product B', 'Product C'],
      datasets: [{ label: 'Performance', data: [80, 95, 70], backgroundColor: '#00bcd4' }]
    },
    options: { responsive: true }
  },
  "Market Trends": {
    type: 'line',
    data: {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [{ label: 'Market Growth', data: [20, 35, 40, 55, 70], borderColor: '#00bcd4', fill: false }]
    },
    options: { responsive: true }
  },
  "Employee Analytics": {
    type: 'bar',
    data: {
      labels: ['Dept A', 'Dept B', 'Dept C'],
      datasets: [{ label: 'Employee Score', data: [70, 85, 90], backgroundColor: '#00bcd4' }]
    },
    options: { responsive: true }
  },
  "Profit Analysis": {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{ label: 'Profit', data: [3000, 4000, 3500, 5000, 4500], borderColor: '#00bcd4', fill: false }]
    },
    options: { responsive: true }
  },
  "Expense Breakdown": {
    type: 'doughnut',
    data: {
      labels: ['Marketing', 'R&D', 'Operations'],
      datasets: [{ label: 'Expenses', data: [30, 40, 30], backgroundColor: ['#00bcd4', '#ffab00', '#ff5252'] }]
    },
    options: { responsive: true }
  },
  "Growth Forecast": {
    type: 'line',
    data: {
      labels: ['2024', '2025', '2026'],
      datasets: [{ label: 'Forecast', data: [50, 70, 90], borderColor: '#00bcd4', fill: false }]
    },
    options: { responsive: true }
  }
};

// Open modal  chart
cards.forEach(card => {
  card.addEventListener('click', () => {
    const dashboard = card.getAttribute('data-dashboard');
    modalTitle.textContent = dashboard;

    // Clear previous content
    dashboardContent.innerHTML = '<canvas id="dashboardChart"></canvas>';

    const ctx = document.getElementById('dashboardChart').getContext('2d');

  //destroy previous chart 
    if (chartInstance) chartInstance.destroy();

    //create new model
    chartInstance = new Chart(ctx, dashboardsData[dashboard]); 

    modal.style.display = 'block';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Click outside modal closes
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


//login logout restriction code 
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    // If not logged in → redirect to sign-in
    alert("Please sign in first!");
    window.location.href = "signin.html";
    return;
  }

  // Replace auth buttons with Logout button
  const authButtons = document.querySelector(".auth-buttons");
  if (authButtons) {
    authButtons.innerHTML = `<button id="logoutBtn">Logout</button>`;

    // Logout button 
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      alert("You have been logged out.");
      window.location.href = "signin.html";
    });
  }
});
