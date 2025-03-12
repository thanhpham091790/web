console.log("Js connected!");

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const left = document.querySelector(".left");

openMenu.addEventListener("click", () => {
    left.style.transform = "translateX(0)";
});

closeMenu.addEventListener("click", () => {
    left.style.transform = "translateX(-100%)";
});