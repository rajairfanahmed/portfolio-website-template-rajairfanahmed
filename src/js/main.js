import "../styles/main.css";
document.addEventListener("DOMContentLoaded", (() => { const e = document.getElementById("hamburger-menu"), t = document.querySelector(".mobile-view"); e.addEventListener("click", (() => { e.classList.toggle("open"), t.classList.toggle("show") })) }));

