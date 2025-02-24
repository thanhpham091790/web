

const input = document.querySelector('#pwd');
const checkbox = document.querySelector("#showpwd");

checkbox.addEventListener("click", clickHandler);

function clickHandler(event) {
    if (event.target.checked == true) {
        input.type = "text";
    } else {
        input.type = "password";
    }
}