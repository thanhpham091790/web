
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name: "Thanh",
    chips: 145
}

const startGameBtn = document.querySelector("#start-game");
const newCardBtn = document.querySelector("#new-card");
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const playerEl = document.querySelector("#player-el");

playerEl.textContent = `${player.name}: $${player.chips}`;

startGameBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);

function  getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    switch (randomNumber){
        case 1: 
            return 11;
            break;
        case 11: 
            return 10;
            break;
        case 12: 
            return 10;
            break;
        case 13: 
            return 10;
            break;
        default:
            return randomNumber;
            break;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    
    renderGame();
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function renderGame(){
    cardsEl.textContent = "Cards: ";

    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;

    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }else{
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

