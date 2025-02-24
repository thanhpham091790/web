

const button = document.querySelector(".btn");
const input = document.querySelector("#some-text");


button.addEventListener("click", clickHandler);
input.addEventListener("keypress", keypressHandler);


function clickHandler(event) {
    alert("You clicked button!");
}

function keypressHandler(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        button.click();
    }
}