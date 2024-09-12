let home = 0;
let guest = 0;

const homeScore = document.querySelector("#home-score");
const homePlusOne = document.querySelector("#home1");
const homePlusTwo = document.querySelector("#home2");
const homePlusThree = document.querySelector("#home3");

const guestScore = document.querySelector("#guest-score");
const guestPlusOne = document.querySelector("#guest1");
const guestPlusTwo = document.querySelector("#guest2");
const guestPlusThree = document.querySelector("#guest3");

document.addEventListener("click", updateScore);
function updateScore(event){
    switch(event.target.id){
        case "home1":
            home += 1;
            homeScore.textContent = home;
            break;
        case "home2":
            home += 2;
            homeScore.textContent = home;
            break;
        case "home3":
            home += 3;
            homeScore.textContent = home;
            break;
        case "guest1":
            guest += 1;
            guestScore.textContent = guest;
            break;
        case "guest2":
            guest += 2;
            guestScore.textContent = guest;
            break;
        case "guest3":
            guest += 3;
            guestScore.textContent = guest;
            break;
        case "new-game":
            home = 0;
            guest = 0;
            homeScore.textContent = home;
            guestScore.textContent = guest;
            break;
    }
}
