let playerPoints = 0;
let pcPoints = 0;

const match = document.querySelector(".match");
const result = document.querySelector(".result")
const playerImg = document.querySelector(".player-img");
const pcImg = document.querySelector(".pc-img");
const playerImgContainer = document.querySelector(".player-container .img-container");
const playerPcContainer = document.querySelector(".pc-container .img-container");
const playerScore = document.querySelector(".player-score");
const pcScore = document.querySelector(".pc-score");
const elementBtns = document.querySelectorAll(".element-btns button");
const waterSound = document.querySelector(".water-sound");
const earthSound = document.querySelector(".earth-sound");
const fireSound = document.querySelector(".fire-sound");
const airSound = document.querySelector(".air-sound");
const gameOverModal = document.querySelector(".end.modal");
const endMsg = document.querySelector(".end-message");
const endImg = document.querySelector(".end-image");
const playAgainBtn = document.querySelector(".play-again");
const endOverlay = document.querySelector(".end.overlay");
const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close-btn");
const tutorialModal = document.querySelector(".tutorial.modal");
const tutorialOverlay = document.querySelector(".tutorial.overlay");
const winSound = document.querySelector(".win-sound");
const lossSound = document.querySelector(".loss-sound");

elementBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    let playerSelection = parseInt(btn.id);
    let computerSelection = Math.floor(Math.random() * 4);
    playRound(playerSelection, computerSelection);
  });
});

function playRound(playerSelection, computerSelection) {

  if (playerSelection === 0) { 
    
    switch(computerSelection) {
      
      case 0: 
        changeDom("Water", "Water", "tie");
        break;

      case 1: 
        changeDom("Water", "Earth", "playerWins");
        break;
        
      case 2:
        changeDom("Water", "Fire", "tieOpp");
        break;

      case 3: 
        changeDom("Water", "Air", "pcWins");
        break;
    }
  
  } else if (playerSelection === 1) { 
    
    switch (computerSelection) {
      
      case 0:
        changeDom("Earth", "Water", "pcWins");
        break;
        
      case 1: 
        changeDom("Earth", "Earth", "tie");
        break;

      case 2: 
        changeDom("Earth", "Fire", "playerWins");
        break;

      case 3:
        changeDom("Earth", "Air", "tieOpp");
        break;
    }

  } else if (playerSelection === 2) { 

    switch (computerSelection) {
      
      case 0: 
        changeDom("Fire", "Water", "tieOpp");
        break;
        
      case 1: 
        changeDom("Fire", "Earth", "pcWins");
        break;

      case 2:
        changeDom("Fire", "Fire", "tie");
        break;

      case 3: 
        changeDom("Fire", "Air", "playerWins");
        break;
    }
  } else { 

    switch(computerSelection) {
      
      case 0: 
        changeDom("Air", "Water", "playerWins");
        break;
        
      case 1:
        changeDom("Air", "Earth", "tieOpp");
        break;
        
      case 2: 
        changeDom("Air", "Fire", "pcWins");
        break;

      case 3: 
        changeDom("Air", "Air", "tie");
        break;
    }
  }
  
  checkGameOver();
}

function changeDom (playerElement, pcElement, matchResult) {

  playerImg.src = "./images/" + playerElement + ".png"  
  pcImg.src = "./images/" + pcElement + ".png" 
  playSound(playerElement);

  if (matchResult === "playerWins") {

  result.textContent = "You win!";
  match.textContent = playerElement + " beats " + pcElement;
  playerImgContainer.style.border = "10px solid green";
  playerPcContainer.style.border = "10px solid red";
  playerPoints += 1;  

  } else if (matchResult === "pcWins") {
    
    result.textContent = "You lose!";
    match.textContent = pcElement + " beats " + playerElement;
    playerImgContainer.style.border = "10px solid red";
    playerPcContainer.style.border = "10px solid green";
    pcPoints += 1;
  
  } else if (matchResult === "tieOpp") {

    result.textContent = "It's a tie!";
    match.textContent = playerElement + " and " + pcElement + " are opposite elements";
    playerImgContainer.style.border = "10px solid black";
    playerPcContainer.style.border = "10px solid white";

  } else {

    result.textContent = "It's a tie!";
    match.textContent = "They are the same element";
    playerImgContainer.style.border = "10px solid white";
    playerPcContainer.style.border = "10px solid white";
  }

  playerScore.textContent = playerPoints;
  pcScore.textContent = pcPoints;
}

function playSound(elementClicked) {

  if (elementClicked === "Water") {
    waterSound.play();
  } else if (elementClicked === "Earth") {
    earthSound.play();
  } else if (elementClicked === "Fire") {
    fireSound.play();
  } else {
    airSound.play();
  }
}

function checkGameOver() {

  if (playerPoints === 5 || pcPoints === 5) {

    gameOverModal.classList.remove("hidden");
    endOverlay.classList.remove("hidden");

    if (playerPoints === 5) {
      endMsg.textContent = "Congratulations! You've won the game";
      endImg.src = "./images/momo.gif";
      endImg.alt = "A gif of Momo (Avatar's lemur) dancing"
      winSound.play();
    } else {
      endMsg.textContent = "Boo hoo... You've lost the game";
      endImg.src = "./images/appa.gif";
      endImg.alt = "A gif of Appa (Avatar's bison) eating hay"
      lossSound.play();
    }
  }
}

playAgainBtn.addEventListener("click", () => {
  gameOverModal.classList.add("hidden");
  endOverlay.classList.add("hidden");
  match.textContent = "Score 5 points to win the game";
  playerImg.src = "./images/momo.png";
  pcImg.src = "./images/appa.png";
  playerImgContainer.style.border = "";
  playerPcContainer.style.border = "";
  playerPoints = 0;
  pcPoints = 0;
  playerScore.textContent = playerPoints;
  pcScore.textContent = pcPoints;
  result.textContent = "Choose an element";
});

closeBtn.addEventListener("click", () => {
  tutorialModal.classList.add("hidden");
  tutorialOverlay.classList.add("hidden");
});

rulesBtn.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
});

