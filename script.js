let playerPoints = 0;
let pcPoints = 0;

let result = document.querySelector(".result");
let winner = document.querySelector(".winner");
let pcChoice = document.querySelector(".pcChoice")
let playerImg = document.querySelector(".playerImg");
let pcImg = document.querySelector(".pcImg");
let playerContainer = document.querySelector(".playerContainer");
let pcContainer = document.querySelector(".pcContainer");
result.textContent = "";
winner.textContent = "";

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

  let playerScore = document.querySelector(".playerScore");
  let pcScore = document.querySelector(".pcScore");
  playerScore.textContent = playerPoints;
  pcScore.textContent = pcPoints;
  
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

function changeDom (playerEle, pcEle, matchResult) {
  playerImg.src = "/images/" + playerEle + ".png"  
  pcImg.src = "/images/" + pcEle + ".png" 

  if (matchResult === "playerWins") {

  pcChoice.textContent = "You win!";
  result.textContent = playerEle + " beats " + pcEle;
  playerContainer.style.border = "10px solid green";
  pcContainer.style.border = "10px solid red";
  playerPoints += 1;  

  } else if (matchResult === "pcWins") {
    
    pcChoice.textContent = "You lose!";
    result.textContent = pcEle + " beats " + playerEle;
    playerContainer.style.border = "10px solid red";
    pcContainer.style.border = "10px solid green";
    pcPoints += 1;
  
  } else if (matchResult === "tieOpp") {

    pcChoice.textContent = "It's a tie!";
    result.textContent = playerEle + " and " + pcEle + " are opposite elements";
    playerContainer.style.border = "10px solid black";
    pcContainer.style.border = "10px solid white";

  } else {

    pcChoice.textContent = "It's a tie!";
    result.textContent = "They are the same element";
    playerContainer.style.border = "10px solid white";
    pcContainer.style.border = "10px solid white";
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {

  button.addEventListener("click", () => {

    let playerSelection = parseInt(button.id);
    let computerSelection = Math.floor(Math.random() * 4);
    playRound(playerSelection, computerSelection);
  });
});