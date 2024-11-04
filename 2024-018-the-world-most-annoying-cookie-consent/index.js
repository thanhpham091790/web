const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const modalInner = document.querySelector("#modal-inner");
const declineBtn = document.querySelector("#modal-decline-btn");
const modalChoiceBtns = document.querySelector("#modal-choice-btns");

setTimeout(() => {
    modal.style.display = "block";
}, 1500);

closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
});

consentForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get("fullName");

    modalText.innerHTML = 
    `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">Uploading your data to the dark web...</p>
    </div>`;

    setTimeout(()=>{
        document.querySelector("#uploadText").textContent = "Making the sale...";
    }, 1500);

    setTimeout(()=>{
        modalInner.innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>
        `;
        closeBtn.disabled = false;
    }, 3000);
});

declineBtn.addEventListener("mouseover", ()=>{
    modalChoiceBtns.classList.toggle("reverse");
});

