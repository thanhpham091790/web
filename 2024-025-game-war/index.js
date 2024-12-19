
const shuffleDeckBtn = document.querySelector("#new-deck");
const remainingCards = document.querySelector("#remaining-cards");
const mainTitle = document.querySelector("#main-title");
const computer = document.querySelector("#computer");
const computerCard = document.querySelector("#computer-card");
const playerCard = document.querySelector("#player-card");
const player = document.querySelector("#player");
const drawBtn = document.querySelector("#draw-cards");

const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];

let deckId;
let computerScore;
let playerScore;
let msg;

// Fetch an API in regular way
// const shuffleDeckBtnHandler = () => {
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       if(data.success){
//         deckId = data.deck_id;
//         computerScore = 0;
//         playerScore = 0;
//         msg = "Game of War";

//         remainingCards.textContent = `Remaining cards: ${data.remaining}`;
//         mainTitle.textContent = msg;
//         computer.textContent = `Computer: ${computerScore}`;
//         computerCard.innerHTML = "";
//         playerCard.innerHTML = "";
//         player.textContent = `Player: ${playerScore}`;
//         if(drawBtn.disabled){
//           drawBtn.disabled = false;
//         }
//       }
//     });
// };

// Fetch an API using async/await keyword
const shuffleDeckBtnHandler = async () => {
  const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/");
  const data = await response.json();
  console.log(data);
  if(data.success){
    deckId = data.deck_id;
    computerScore = 0;
    playerScore = 0;
    msg = "Game of War";

    remainingCards.textContent = `Remaining cards: ${data.remaining}`;
    mainTitle.textContent = msg;
    computer.textContent = `Computer: ${computerScore}`;
    computerCard.innerHTML = "";
    playerCard.innerHTML = "";
    player.textContent = `Player: ${playerScore}`;
    if(drawBtn.disabled){
      drawBtn.disabled = false;
    }
  }
};

const compareCardsHandler = (card1, card2) => {
  if(cardValues.indexOf(card1.value) > cardValues.indexOf(card2.value)){
    msg = "Computer win!";
    computerScore++;
  }
  else if(cardValues.indexOf(card1.value) < cardValues.indexOf(card2.value)){
    msg = "Player win!";
    playerScore++;
  }else{
    msg = "It's a tie!";
  }
  mainTitle.textContent = msg;
  computer.textContent = `Computer: ${computerScore}`;
  player.textContent = `Player: ${playerScore}`;
}

// Fetch an API in regular way
// const drawBtnHandler = () => {
//   if(deckId){
//     fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         if(data.success){
//           computerCard.innerHTML = `<img class="card" src="${data.cards[0].image}" alt="${data.cards[0].suit}" />`;
//           playerCard.innerHTML = `<img class="card" src="${data.cards[1].image}" alt="${data.cards[1].suit}" />`;
//           compareCardsHandler(data.cards[0], data.cards[1]);
//           remainingCards.textContent = `Remaining cards: ${data.remaining}`;
//           if(data.remaining === 0){
//             if(computerScore > playerScore){
//               msg = "Finally, computer win!"
//             }else if(computerScore < playerScore){
//               msg = "Finally, player win!";
//             }else{
//               msg = "Finally, it's a tie!";
//             }
//             mainTitle.textContent = msg;
//             drawBtn.disabled = true;
//           }
//         }
//       });
//   }else{
//     remainingCards.textContent = `Please shuffle deck first !`;
//   }
// };

// Fetch an API using asyns/await keyword
const drawBtnHandler = async () => {
  if(deckId){
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    const data = await response.json();
    
    console.log(data);
    if(data.success){
      computerCard.innerHTML = `<img class="card" src="${data.cards[0].image}" alt="${data.cards[0].suit}" />`;
      playerCard.innerHTML = `<img class="card" src="${data.cards[1].image}" alt="${data.cards[1].suit}" />`;
      compareCardsHandler(data.cards[0], data.cards[1]);
      remainingCards.textContent = `Remaining cards: ${data.remaining}`;
      if(data.remaining === 0){
        if(computerScore > playerScore){
          msg = "Finally, computer win!"
        }else if(computerScore < playerScore){
          msg = "Finally, player win!";
        }else{
          msg = "Finally, it's a tie!";
        }
        mainTitle.textContent = msg;
        drawBtn.disabled = true;
      }
    }
  }else{
    remainingCards.textContent = `Please shuffle deck first !`;
  }
};


shuffleDeckBtn.addEventListener("click", shuffleDeckBtnHandler);
drawBtn.addEventListener("click", drawBtnHandler);
  
