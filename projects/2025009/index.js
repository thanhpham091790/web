

const menu = document.querySelector("#menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");


// Open menu when clicked on menu bar
openMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
});

// Close menu when clicked on X
closeMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
});

