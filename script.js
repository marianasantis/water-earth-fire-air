const matchInfo = document.getElementById("match-info");
const resultInfo = document.getElementById("result-info")
const playerImg = document.getElementById("player-img");
const pcImg = document.getElementById("pc-img");
const playerImgContainer = document.querySelector("#player-container .img-container");
const playerPcContainer = document.querySelector("#pc-container .img-container");
const playerScore = document.getElementById("player-score");
const pcScore = document.getElementById("pc-score");
const elementBtns = document.querySelectorAll("#element-btns button");
const waterSound = document.getElementById("water-sound");
const earthSound = document.getElementById("earth-sound");
const fireSound = document.getElementById("fire-sound");
const airSound = document.getElementById("air-sound");
const gameOverModal = document.getElementById("end-modal");
const endMsg = document.getElementById("end-message");
const endImg = document.getElementById("end-image");
const playAgainBtn = document.getElementById("end-button");
const endOverlay = document.getElementById("end-overlay");
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const tutorialModal = document.getElementById("tutorial-modal");
const tutorialOverlay = document.getElementById("tutorial-overlay");
const winSound = document.getElementById("win-sound");
const lossSound = document.getElementById("loss-sound");

let playerPoints = 0;
let pcPoints = 0;

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

  resultInfo.textContent = "You win!";
  matchInfo.textContent = playerElement + " beats " + pcElement;
  playerImgContainer.style.border = "10px solid green";
  playerPcContainer.style.border = "10px solid red";
  playerPoints += 1;  

  } else if (matchResult === "pcWins") {
    
    resultInfo.textContent = "You lose!";
    matchInfo.textContent = pcElement + " beats " + playerElement;
    playerImgContainer.style.border = "10px solid red";
    playerPcContainer.style.border = "10px solid green";
    pcPoints += 1;
  
  } else if (matchResult === "tieOpp") {

    resultInfo.textContent = "It's a tie!";
    matchInfo.textContent = playerElement + " and " + pcElement + " are opposite elements";
    playerImgContainer.style.border = "10px solid black";
    playerPcContainer.style.border = "10px solid white";

  } else {

    resultInfo.textContent = "It's a tie!";
    matchInfo.textContent = "They are the same element";
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
  matchInfo.textContent = "Score 5 points to win the game";
  playerImg.src = "./images/momo.png";
  pcImg.src = "./images/appa.png";
  playerImgContainer.style.border = "";
  playerPcContainer.style.border = "";
  playerPoints = 0;
  pcPoints = 0;
  playerScore.textContent = playerPoints;
  pcScore.textContent = pcPoints;
  resultInfo.textContent = "Choose an element";
});

closeBtn.addEventListener("click", () => {
  tutorialModal.classList.add("hidden");
  tutorialOverlay.classList.add("hidden");
});

rulesBtn.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
});

