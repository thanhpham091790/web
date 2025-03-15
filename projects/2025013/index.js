console.log("Js connected!");

const menuIcon = document.querySelector(".menu-icon")
menuClose = document.querySelector(".menu-close")
menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
});

menuClose.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
});