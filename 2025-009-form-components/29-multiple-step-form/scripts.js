let currentTab = 0;
showTab(currentTab);

document.querySelector("#previous").addEventListener("click", clickHandler);
document.querySelector("#next").addEventListener("click", clickHandler);

function clickHandler(event) {
    if (event.target == document.querySelector("#previous")) {
        nextPrev(-1);
    }

    if (event.target == document.querySelector("#next")) {
        nextPrev(1);
    }
}

function nextPrev(n) {
    let x = document.querySelectorAll(".tab");
    if (n == 1 && (validateForm() == false)) {
        return false;
    }
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.querySelector("#regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    let x, y, i, valid = true;
    x = document.querySelectorAll(".tab");
    y = x[currentTab].querySelectorAll("input")
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].classList.add("invalid");
            valid = false;
        }
    }
    if (valid == true) {
        document.querySelectorAll(".step")[currentTab].classList.add("finish");
    }

    return valid;
}

function showTab(n) {
    let x = document.querySelectorAll(".tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.querySelector("#previous").style.display = "none";
    } else {
        document.querySelector("#previous").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.querySelector("#next").innerHTML = "Submit";
    } else {
        document.querySelector("#next").innerHTML = "Next";
    }

    fixStepIndicator(n);
}

function fixStepIndicator(n) {
    let x = document.querySelectorAll(".step");
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    x[n].classList.add("active");
}