const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const main = document.querySelector("#main");

document.addEventListener("click", clickHandler);

function clickHandler(e) {
    if (e.target == openBtn) {
        main.style.display = "block";
        openBtn.style.display = "none";
    }
    if (e.target == closeBtn) {
        main.style.display = "none";
        openBtn.style.display = "block";
    }
}
