const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

// Navbar al hacer scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Abrir / cerrar menú
toggle.addEventListener("click", () => {

    menu.classList.toggle("active");
    navbar.classList.toggle("menu-open");

    toggle.textContent = menu.classList.contains("active")
        ? "✕"
        : "☰";

});

// Cerrar menú al dar clic en un enlace
document.querySelectorAll(".navbar__menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");
        navbar.classList.remove("menu-open");
        toggle.textContent = "☰";

    });

});