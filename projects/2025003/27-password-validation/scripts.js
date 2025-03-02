

const password = document.querySelector("#password");
const message = document.querySelector("#message");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const number = document.querySelector("#number");
const minimum = document.querySelector("#mininum");

password.addEventListener("focus", focusHandler);
password.addEventListener("blur", blurHandler);
password.addEventListener("keyup", keyupHandler);

function focusHandler() {
    message.style.display = "block";
}

function blurHandler() {
    message.style.display = "none";
}

function keyupHandler() {
    let lowercaseRegex = /[a-z]/g;
    let uppercaseRegex = /[A-Z]/g;
    let numberRegex = /[0-9]/g;

    if (password.value.match(lowercaseRegex)) {
        lowercase.classList.replace("invalid", "valid");
    } else {
        lowercase.classList.replace("valid", "invalid");
    }

    if (password.value.match(uppercaseRegex)) {
        uppercase.classList.replace("invalid", "valid");
    } else {
        uppercase.classList.replace("valid", "invalid");
    }

    if (password.value.match(numberRegex)) {
        number.classList.replace("invalid", "valid");
    } else {
        number.classList.replace("valid", "invalid");
    }

    if (password.value.length >= 8) {
        minimum.classList.replace("invalid", "valid");
    } else {
        minimum.classList.replace("valid", "invalid");
    }
}