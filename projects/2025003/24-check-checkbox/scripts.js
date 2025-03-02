const checkbox = document.querySelector("#myCheck");
const result = document.querySelector("#result");

document.addEventListener("click", clickHandler);

function clickHandler(e) {
    if (e.target == checkbox) {
        if (checkbox.checked == true)
            result.style.display = "block";
        else
            result.style.display = "none";
    }
}