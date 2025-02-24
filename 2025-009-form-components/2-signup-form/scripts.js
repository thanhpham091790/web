

const trigger = document.querySelector("#trigger-form");
const overlay = document.querySelector(".overlay");

trigger.addEventListener("click", () => {
    overlay.style.display = "block";
});


document.addEventListener("click", (event) => {
    if (event.target == overlay) {
        overlay.style.display = "none";
    }
})