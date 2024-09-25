

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase,
          ref,
          push, 
          onValue,
          remove } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-7ac27-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");

onValue(referenceInDB, (snapshot)=>{
  if(snapshot.exists()){
    const leads = Object.values(snapshot.val());
    render(leads);
  }
});

deleteBtn.addEventListener("dblclick", () => {
  remove(referenceInDB);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", () => {
    push(referenceInDB, inputEl.value);
    inputEl.value = "";
});



// Create the render function
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a href="${leads[i]}" target="_blank">${leads[i]}</a>
        </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
