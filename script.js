// Theme toggle button
const toggleBtn = document.getElementById("toggle-theme");
const currentTheme = localStorage.getItem("theme");

// Load saved theme
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌓";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");

  if (theme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌓";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close nav on link click
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
