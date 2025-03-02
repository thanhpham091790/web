
const input = document.querySelector("#name");

input.addEventListener("focus", (event) => {
    event.target.value = "";
});