const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
let isMenuDisplay = false;

function toggleMenuDisplay() {
    if (isMenuDisplay) {
        menu.style.display = "none";
        isMenuDisplay = false;
    } else {
        menu.style.display = "block";
        isMenuDisplay = true;
    }
}

menuIcon.addEventListener("click", () => {
    toggleMenuDisplay();
});

document.addEventListener("click", (event) => {
    if (isMenuDisplay && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        toggleMenuDisplay();
    }
});