// --------------------- Navbar Toggle ---------------------
const menuToggle = document.getElementById("menuToggle");
const navContainer = document.getElementById("navContainer");

menuToggle.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});


// --------------------- Charts ---------------------
document.addEventListener("DOMContentLoaded", () => {
  new Chart(document.getElementById("salesChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{ label: "Sales ($)", data: [120, 150, 180, 130, 200], backgroundColor: "#00bcd4" }]
    },
    options: { plugins: { legend: { display: false } }, responsive: true }
  });

  new Chart(document.getElementById("revenueChart"), {
    type: "line",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [{ label: "Revenue", data: [5000, 7000, 6500, 8000], borderColor: "#00bcd4", tension: 0.4, fill: false }]
    },
    options: { plugins: { legend: { display: false } }, responsive: true }
  });

  new Chart(document.getElementById("customerChart"), {
    type: "doughnut",
    data: { labels: ["Retained", "Churned"], datasets: [{ data: [75, 25], backgroundColor: ["#00bcd4", "#ff5252"] }] },
    options: { plugins: { legend: { display: false } }, responsive: true }
  });

  new Chart(document.getElementById("productChart"), {
    type: "bar",
    data: { labels: ["A", "B", "C"], datasets: [{ label: "Performance", data: [80, 95, 70], backgroundColor: "#00bcd4" }] },
    options: { plugins: { legend: { display: false } }, responsive: true }
  });

  new Chart(document.getElementById("marketChart"), {
    type: "line",
    data: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [{ label: "Growth", data: [20, 35, 45, 60, 75], borderColor: "#00bcd4", fill: false, tension: 0.4 }]
    },
    options: { plugins: { legend: { display: false } }, responsive: true }
  });

  new Chart(document.getElementById("employeeChart"), {
    type: "bar",
    data: { labels: ["Dept A", "Dept B", "Dept C"], datasets: [{ label: "Score", data: [70, 85, 90], backgroundColor: "#00bcd4" }] },
    options: { plugins: { legend: { display: false } }, responsive: true }
  });
});


// --------------------- Sign In / Sign Up Modals ---------------------
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const signInModal = document.getElementById("signInModal");
const signUpModal = document.getElementById("signUpModal");

if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    signInModal.style.display = "flex";
  });
}

if (signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    signUpModal.style.display = "flex";
  });
}

window.onclick = function (event) {
  if (event.target === signInModal) signInModal.style.display = "none";
  if (event.target === signUpModal) signUpModal.style.display = "none";
};

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


// --------------------- Sign In / Sign Up Functionality ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector(".submit-btn");
  const signinBtn = document.querySelector(".submit-btn");

  // ----- Sign Up -----
  if (document.title.includes("Sign Up")) {
    signupBtn.addEventListener("click", () => {
      const name = document.querySelector('input[placeholder="Full Name"]').value.trim();
      const email = document.querySelector('input[placeholder="Email"]').value.trim();
      const password = document.querySelector('input[placeholder="Password"]').value.trim();

      if (!name || !email || !password) {
        alert("Please fill all fields!");
        return;
      }

      const userData = { name, email, password };
      localStorage.setItem("bizlyticsUser", JSON.stringify(userData));

      alert("Registration Successful!");
      window.location.href = "signin.html";
    });
  }

  // ----- Sign In -----
  if (document.title.includes("Sign In")) {
    signinBtn.addEventListener("click", () => {
      const email = document.querySelector('input[placeholder="Email"]').value.trim();
      const password = document.querySelector('input[placeholder="Password"]').value.trim();

      const storedUser = JSON.parse(localStorage.getItem("bizlyticsUser"));

      if (!storedUser) {
        alert("No user found! Please sign up first.");
        return;
      }

      if (storedUser.email === email && storedUser.password === password) {
        alert("Login Successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboards.html";
      } else {
        alert("Invalid email or password!");
      }
    });
  }

  // ----- Show Logout if Logged In -----
  const authButtons = document.querySelector(".auth-buttons");
  if (authButtons) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      // Hide Sign In & Sign Up buttons
      authButtons.innerHTML = `<button id="logoutBtn">Logout</button>`;

      // Add logout function
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        alert("You have been logged out.");
        window.location.href = "signin.html";
      });
    }
  }
});
