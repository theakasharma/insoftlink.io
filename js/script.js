const mobile_nav = document.querySelector(".nav-toggle");
const nav_header = document.querySelector(".nav-links")

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener('click', () => toggleNavbar());

$(document).ready(function(){
    $(".sliders").owlCarousel({
        loop: true,
        autoplay: true,
        // autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
})
