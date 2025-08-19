// script.js

// Theme Toggle
const themeBtn = document.getElementById("toggle-theme");
const body = document.body;

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeBtn.textContent = body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
  });
}

// Language Toggle
const langBtn = document.getElementById("toggle-lang");
let currentLang = "en";

if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "nl" : "en";
    document.querySelectorAll("[data-en]").forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    langBtn.textContent = currentLang === "en" ? "🇬🇧 NL" : "🇳🇱 EN";
  });
}

// Scroll animations for feature cards
const featureCards = document.querySelectorAll(".feature-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

featureCards.forEach(card => observer.observe(card));
