const mobile_nav = document.querySelector(".nav-toggle");
const nav_header = document.querySelector(".nav-links")

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener('click', () => toggleNavbar());