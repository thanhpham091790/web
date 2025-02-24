

const notification = document.querySelector(".notification");
const input = document.querySelector("#some-text");

input.addEventListener("keyup", keyupHandler);

function keyupHandler(event) {
    if (event.getModifierState("CapsLock")) {
        notification.style.display = "block";
    } else {
        notification.style.display = "none";
    }
}