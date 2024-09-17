// const pwdLength = 15;
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const state = {
    version: "light",
    passwordLength: 5,
    characters: characters, 
    acceptNumber: true,
    acceptSymbol: true
}

const select = document.querySelector("#version");
const pwdLength = document.querySelector("#pwd-length");
const acceptNumber = document.querySelector("#accept-number");
const acceptSymbol = document.querySelector("#accept-symbol");

const lightVersion = document.querySelector("#light-version");
const lightBtn = document.querySelector("#light-btn");
const lightPwdOne = document.querySelector("#light-pwd-one");
const lightPwdTwo = document.querySelector("#light-pwd-two");

const darkVersion = document.querySelector("#dark-version");
const darkBtn = document.querySelector("#dark-btn");
const darkPwdOne = document.querySelector("#dark-pwd-one");
const darkPwdTwo = document.querySelector("#dark-pwd-two");

const copyBtns = document.querySelectorAll(".copy");


// Set default version and password long when HTML document has been completely parsed.
document.addEventListener("DOMContentLoaded", ()=>{
    select.value = state.version;
    pwdLength.value = state.passwordLength;
    acceptNumber.checked = state.acceptNumber;
    acceptSymbol.checked = state.acceptSymbol;
    renderVersion(state.version);
    copyButton();
});

// Update version
select.addEventListener("change", ()=>{
    state.version = select.value;
    renderVersion(state.version);
});

// Update password long
pwdLength.addEventListener("keyup", ()=>{
    if(pwdLength.value != "")
        state.passwordLength = pwdLength.value;
});

// Update status of accept number
acceptNumber.addEventListener("change", (event)=>{
    if(event.target.checked)
        state.acceptNumber = true;
    else
        state.acceptNumber = false;
});

// Update status of accept symbol
acceptSymbol.addEventListener("change", (event)=>{
    if(event.target.checked)
        state.acceptSymbol = true;
    else
        state.acceptSymbol = false;
});



// Generate password when click - light version
lightBtn.addEventListener("click", ()=>{
    if(state.version === "light") 
        generateTwoPassword(state.passwordLength, state.characters, state.version)
});

// Generate password when click - dark version
darkBtn.addEventListener("click", ()=>{
    if(state.version === "dark") 
        generateTwoPassword(state.passwordLength, state.characters, state.version)
});


// Generate two random passwords and show it out
function generateTwoPassword(n, arr, ver){
    let passwordOne = randomPassword(n, arr);
    let passwordTwo = randomPassword(n, arr);
    renderPassword(ver, passwordOne, passwordTwo);
}


// Return a random password - n characters long from an array
function randomPassword(n, arr){
    let randomPassword = [];
    for(let i=0; i<n; i++){
        randomPassword.push(randomCharacter(arr));
    }
    return randomPassword.join("");
}


// Render the result
function renderPassword(ver, pwd1, pwd2){
    if(ver === "light"){
        lightPwdOne.value = pwd1;
        lightPwdTwo.value = pwd2;
    }else if(ver === "dark"){
        darkPwdOne.value = pwd1;
        darkPwdTwo.value = pwd2;
    }
}


// Return a random character from an array
function randomCharacter(arr){
    let tempArr = arr;
    let randomIndex;
    let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let symbolArr = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    // Accept number
    if(!state.acceptNumber){
        tempArr = tempArr.filter((char)=>{
            if(!numberArr.includes(char))
                return char;
        });
    }
    // Accept symbol
    if(!state.acceptSymbol){
        tempArr = tempArr.filter((char)=>{
            if(!symbolArr.includes(char)){
                return char;
            }
        });
    }

    randomIndex =  Math.floor(Math.random() * tempArr.length);
    return tempArr[randomIndex];
}

// Render version
function renderVersion(ver){
    if(ver === "light"){
        darkVersion.style.display = "none";    
        lightVersion.style.display = "block";
    }else{
        lightVersion.style.display = "none";
        darkVersion.style.display = "block";
    }
}

// Copy button
function copyButton(){
    for(let i=0; i<copyBtns.length; i++){
        copyBtns[i].addEventListener("click", (e)=>{
            // Get the text field
            let siblingInput = e.target.previousElementSibling;
    
            if(siblingInput.value != ""){
                // Select the text field
                siblingInput.select();
                siblingInput.setSelectionRange(0,99999);
    
                // Copy the text inside the text field
                navigator.clipboard.writeText(siblingInput.value);
                e.target.textContent = "Copied!";
            }
        });
    }
}


