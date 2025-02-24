
const triggerBtn = document.querySelector("#trigger-btn");
const closeBtn = document.querySelector("#close-btn");
const overlay = document.querySelector(".overlay");

document.addEventListener("click", (event) => {
    if (event.target == triggerBtn) {
        overlay.style.display = "block";
    }

    if (event.target == closeBtn || event.target == overlay) {
        overlay.style.display = "none";
    }
});
