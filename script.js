let playerPoints = 0;
let pcPoints = 0;

let result = document.querySelector(".result");
let winner = document.querySelector(".winner");
let pcChoice = document.querySelector(".pc-choice")
let playerImg = document.querySelector(".player-img");
let pcImg = document.querySelector(".pc-img");
let playerContainer = document.querySelector(".player-container");
let pcContainer = document.querySelector(".pc-container");
let playerScore = document.querySelector(".player-score");
let pcScore = document.querySelector(".pc-score");
let buttons = document.querySelectorAll("button");
let waterSound = document.querySelector(".water-sound");
let earthSound = document.querySelector(".earth-sound");
let fireSound = document.querySelector(".fire-sound");
let airSound = document.querySelector(".air-sound");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    let playerSelection = parseInt(button.id);
    let computerSelection = Math.floor(Math.random() * 4);
    playRound(playerSelection, computerSelection);
  });
});

function playRound(playerSelection, computerSelection) {

winner.textContent = "";

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

  pcChoice.textContent = "You win!";
  result.textContent = playerElement + " beats " + pcElement;
  playerContainer.style.border = "10px solid green";
  pcContainer.style.border = "10px solid red";
  playerPoints += 1;  

  } else if (matchResult === "pcWins") {
    
    pcChoice.textContent = "You lose!";
    result.textContent = pcElement + " beats " + playerElement;
    playerContainer.style.border = "10px solid red";
    pcContainer.style.border = "10px solid green";
    pcPoints += 1;
  
  } else if (matchResult === "tieOpp") {

    pcChoice.textContent = "It's a tie!";
    result.textContent = playerElement + " and " + pcElement + " are opposite elements";
    playerContainer.style.border = "10px solid black";
    pcContainer.style.border = "10px solid white";

  } else {

    pcChoice.textContent = "It's a tie!";
    result.textContent = "They are the same element";
    playerContainer.style.border = "10px solid white";
    pcContainer.style.border = "10px solid white";
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
  
    if (playerPoints === 5) {
      winner.textContent = "Player won!";
    } else {
      winner.textContent = "Computer won!";
    }

    playerPoints = 0;
    pcPoints = 0;
  }
}


