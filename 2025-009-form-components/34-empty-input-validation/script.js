

const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
    if (e.target["fname"].value == "") {
        alert("Name must be filled out!");
        return false;
    }
});