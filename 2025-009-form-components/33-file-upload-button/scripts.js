

const file = document.querySelector("#myfile");
const label = document.querySelector(".label");
const fileList = document.querySelector(".file-list");

file.addEventListener("change", (e) => {
    const files = e.target.files;
    fileList.innerHTML = "";
    if (files.length <= 1) {
        label.innerHTML = files[0].name;
    } else {
        label.innerHTML = `${files.length} files`;
        for (let i = 0; i < files.length; i++) {
            let ele = document.createElement("p");
            ele.setAttribute("class", "file");
            ele.innerHTML = files[i].name;
            fileList.appendChild(ele);
        }
    }
});