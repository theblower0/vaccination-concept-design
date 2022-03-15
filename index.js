const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

const navOptions = document.querySelectorAll(".nav-menu-link");


navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("nav-menu_visible");
});

navOptions.forEach((menuItem) => {
    menuItem.addEventListener('click', (e) => {
        console.log(e);
        navMenu.classList.toggle("nav-menu_visible");
    });
});

