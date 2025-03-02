

const lightColorInp = document.querySelector("#light-theme #color");
const lightModeSel = document.querySelector("#light-theme #mode");
const lightSubmitBtn = document.querySelector("#light-theme #submit");
const lightBody = document.querySelector("#light-theme #body");
const lightFooter = document.querySelector("#light-theme #footer");

const darkColorInp = document.querySelector("#dark-theme #color");
const darkModeSel = document.querySelector("#dark-theme #mode");
const darkSubmitBtn = document.querySelector("#dark-theme #submit");
const darkBody = document.querySelector("#dark-theme #body");
const darkFooter = document.querySelector("#dark-theme #footer");

lightSubmitBtn.addEventListener("click", (event)=>getColorScheme(event, "light"));
darkSubmitBtn.addEventListener("click",  (event)=>getColorScheme(event, "dark"));

function getColorScheme(event, version){
    console.log(version);
    let colorInp, modeSel, body, footer;

    if(version === "light"){
        colorInp = lightColorInp;
        modeSel = lightModeSel;
        body = lightBody;
        footer = lightFooter;
    }else{
        colorInp = darkColorInp;
        modeSel = darkModeSel;
        body = darkBody;
        footer = darkFooter;
    }

    const url = `https://www.thecolorapi.com/scheme?hex=${colorInp.value.slice(1)}&mode=${modeSel.value}&count=5`;

    fetch(url, {method: "GET"})
        .then(response=>response.json())
        .then(data=>{
            let bodyHtml = ``;
            let footerHtml = ``;
            for(let i=0; i<data.colors.length; i++){
                bodyHtml += `<div class="demo" style="background-color: ${data.colors[i].hex.value}"></div>`;
                footerHtml += `<div class="hex">${data.colors[i].hex.value}</div>`;
            }
            body.innerHTML = bodyHtml;
            footer.innerHTML = footerHtml;
        });
}