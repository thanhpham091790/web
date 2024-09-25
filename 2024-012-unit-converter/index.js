
/*
    1 meter = 3.28084 feet
    1 liter = 0.264172 gallon
    1 kilogram = 2.20462 pound
*/

const numberEl = document.querySelector("#number-el");
const convertBtn = document.querySelector("#convert-btn");
const lengthConvert = document.querySelector("#length-convert");
const volumeConvert = document.querySelector("#volume-convert");
const massConvert = document.querySelector("#mass-convert");
let number = 0;

numberEl.value = number;
render();

convertBtn.addEventListener("click", ()=>{
    if(!isNaN(numberEl.value))
        number = Number(numberEl.value);
    else
        number = 0;
    render();
});

function render(){
    lengthConvert.textContent = `${number} meters = ${(number * 3.28084).toFixed(3)} feet | ${number} feet = ${(number / 3.28084).toFixed(3)} meters`;
    volumeConvert.textContent = `${number} liters = ${(number * 0.264172).toFixed(3)} gallons | ${number} gallons =  ${(number / 0.264172).toFixed(3)} liters`;
    massConvert.textContent = `${number} kilos =  ${(number * 2.20462).toFixed(3)} pounds | ${number} pounds = ${(number / 2.20462).toFixed(3)} kilos`;
}
