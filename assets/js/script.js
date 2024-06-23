"use strict";

// ---------- Mobile menu toggler
const navbar = document.querySelector("[data-navbar]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// --------- Header shadow
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
    header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});
