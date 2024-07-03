let playerPoints = 0;
let pcPoints = 0;

function playRound(playerSelection, computerSelection) {

  let result = document.querySelector(".result");
  let winner = document.querySelector(".winner");
  let pcChoice = document.querySelector(".pcChoice")
  let playerImg = document.querySelector(".playerImg");
  let pcImg = document.querySelector(".pcImg");
  let playerContainer = document.querySelector(".playerContainer");
  let pcContainer = document.querySelector(".pcContainer");
  result.textContent = "";
  winner.textContent = "";

  if (playerSelection === 0) { //player chose water
    
    switch(computerSelection) {
      
      case 0: //pc chose water
        pcChoice.textContent = "It's a tie!";
        result.textContent = "They are the same element";
        playerImg.src = "./images/water.png"  
        pcImg.src = "./images/water.png"
        playerContainer.style.border = "10px solid white";
        pcContainer.style.border = "10px solid white";
        break;

      case 1: //pc chose earth
        pcChoice.textContent = "You win!";
        result.textContent = "Water beats Earth";
        playerImg.src = "./images/water.png"  
        pcImg.src = "./images/earth.png"
        playerContainer.style.border = "10px solid green";
        pcContainer.style.border = "10px solid red";
        playerPoints += 1;
        break;
        
      case 2: //pc chose fire
        pcChoice.textContent = "It's a tie!";
        result.textContent = "Water and Fire are opposite elements";
        playerImg.src = "./images/water.png"  
        pcImg.src = "./images/fire.png"
        playerContainer.style.border = "10px solid black";
        pcContainer.style.border = "10px solid white";
        break;

      case 3: //pc chose air
        pcChoice.textContent = "You lose!";
        result.textContent = "Air beats Water";
        playerImg.src = "./images/water.png"  
        pcImg.src = "./images/air.png"
        playerContainer.style.border = "10px solid red";
        pcContainer.style.border = "10px solid green";
        pcPoints += 1;
        break;
    }
  
  } else if (playerSelection === 1) { //player chose earth
    
    switch (computerSelection) {
      
      case 0: //pc chose water
        pcChoice.textContent = "Computer chose Water";
        result.textContent = "You lose! Water beats Earth.";
        
        pcPoints += 1;
        break;
        
      case 1: //pc chose earth
        pcChoice.textContent = "Computer chose Earth";
        result.textContent = "It's a tie! They're the same element."; 
        break;

      case 2: //pc chose fire
        pcChoice.textContent = "Computer chose Fire";
        result.textContent = "You win! Earth beats Fire.";
        playerPoints += 1;
        break;

      case 3: //pc chose air
        pcChoice.textContent = "Computer chose Air";
        result.textContent = "It's a tie! Earth and Air are opposite elements."
        break;
    }

  } else if (playerSelection === 2) { //player chose fire

    switch (computerSelection) {
      
      case 0: //pc chose water
        pcChoice.textContent = "Computer chose Water";
        result.textContent = "It's a tie! Fire and Water are opposite elements.";
        break;
        
      case 1: //pc chose earth
        pcChoice.textContent = "Computer chose Earth";
        result.textContent = "You lose! Earth beats Fire.";
        pcPoints += 1;
        break

      case 2: //pc chose fire
        pcChoice.textContent = "Computer chose Fire";
        result.textContent = "It's a tie! They're the same element."; 
        break;

      case 3: //pc chose air
      pcChoice.textContent = "Computer chose Air";
      result.textContent = "You win! Fire beats Air."; 
      playerPoints += 1;
      break;
    }
  } else { //player chose air

    switch(computerSelection) {
      
      case 0: //pc chose water
        pcChoice.textContent = "Computer chose Water";
        result.textContent = "You win! Air beats Water";
        playerPoints += 1;
        break;
        
      case 1: //pc chose earth
        pcChoice.textContent = "Computer chose Earth";
        result.textContent = "It's a tie! Air and Earth are opposite elements.";
        break

      case 2: //pc chose fire
        pcChoice.textContent = "Computer chose Fire";
        result.textContent = "You lose! Fire beats Air"; 
        pcPoints += 1;
        break;

      case 3: //pc chose air
      pcChoice.textContent = "Computer chose Air";
      result.textContent = "It's a tie! They're the same element."; 
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {

  button.addEventListener("click", () => {

    let playerSelection = parseInt(button.id);
    let computerSelection = Math.floor(Math.random() * 4);
    playRound(playerSelection, computerSelection);
  });
});