import { catsData } from "./data.js";

const emotionRadios = document.querySelector("#emotion-radios");
const getImageBtn = document.querySelector("#get-image-btn");
const gifsOnlyOption = document.querySelector("#gifs-only-option");
const memeModal = document.querySelector("#meme-modal");
const memeModalInner = document.querySelector("#meme-modal-inner");
const memeModalCloseBtn = document.querySelector("#meme-modal-close-btn")


emotionRadios.addEventListener("change", highLightCheckedOption);
getImageBtn.addEventListener("click", renderCat);
memeModalCloseBtn.addEventListener("click", closeModal);

function highLightCheckedOption(e){
    const radios = document.querySelectorAll(".radio");
    for(let radio of radios){
        radio.classList.remove("highlight");
    }
    document.querySelector(`#${e.target.id}`).parentElement.classList.add("highlight");
}

function renderCat(){
    const catObject = getSingCatObject();
    memeModalInner.innerHTML =  
    `<img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
    >`;
    memeModal.style.display = "flex";
}

function getSingCatObject(){
    const catsArray = getMatchingCatsArray();
    if(catsArray.length === 1){
        return catsArray[0];
    }else{
        const randomIndex = Math.floor(Math.random() * catsArray.length);
        return catsArray[randomIndex];
    }
}

function getMatchingCatsArray(){
    if(document.querySelector("input[type='radio']:checked")){
        const selectedEmotion = document.querySelector("input[type='radio']:checked").value;
        const isGif = gifsOnlyOption.checked;
        const matchingCatsArray = catsData.filter((cat)=>{
            if(isGif)
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            else
                return cat.emotionTags.includes(selectedEmotion);
        });
        return matchingCatsArray;
    }
}

function closeModal(){
    memeModal.style.display = "none";
}

function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats);
    let str = "";
    for(let emotion of emotions){
        str += `
            <div class="radio">
                <lable for="${emotion}">${emotion}</lable>
                <input type="radio" name="cat-emotion" id="${emotion}" value="${emotion}" />
            </div>
        `;
    }
    emotionRadios.innerHTML = str;
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion))
                emotionsArray.push(emotion);
        }
    }
    return emotionsArray;
}

renderEmotionsRadios(catsData);