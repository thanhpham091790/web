

let count = 0;
const incrementBtn = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");
const countEl = document.querySelector("#count-el");
const saveEl = document.querySelector("#save-el");

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countStr =  count + " - ";
    saveEl.textContent +=  countStr;
    count = 0;
    countEl.textContent = 0;
}