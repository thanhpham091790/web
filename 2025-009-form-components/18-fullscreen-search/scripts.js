

const openSearch = document.querySelector("#open-search-box");
const closeSearch = document.querySelector("#close-search-box");
const overlay = document.querySelector(".overlay");

document.addEventListener('click', clickHandler);

function clickHandler(e) {
    if (e.target == openSearch) {
        // Click on open search box button
        overlay.style.display = "block";
    }

    if (e.target == closeSearch) {
        // Click on x button
        overlay.style.display = "none";
    }
}
