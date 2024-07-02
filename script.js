let playerPoints = 0;
let pcPoints = 0;

function playRound(playerSelection, computerSelection) {

  let result = document.querySelector(".result");
  let winner = document.querySelector(".winner");
  result.textContent = "";
  winner.textContent = "";

  if (playerSelection === 0) { //player chose water
    
    switch(computerSelection) {
      
      case 0: //pc chose water
        winner.textContent = "Computer chose Water";
        result.textContent = "It's a tie! They're the same element.";  
        break;

      case 1: //pc chose earth
        winner.textContent = "Computer chose Earth";
        result.textContent = "You win! Water beats Earth.";
        playerPoints += 1;
        break;
        
      case 2: //pc chose fire
        winner.textContent = "Computer chose Fire";
        result.textContent = "It's a tie! Water and Fire are opposite elements.";
        break;

      case 3: //pc chose air
        winner.textContent = "Computer chose Air";
        result.textContent = "You lose! Air beats Water";
        pcPoints += 1;
        break;
    }
  
  } else if (playerSelection === 1) { //player chose earth
    
    switch (computerSelection) {
      
      case 0: //pc chose water
        winner.textContent = "Computer chose Water";
        result.textContent = "You lose! Water beats Earth.";
        pcPoints += 1;
        break;
        
      case 1: //pc chose earth
        winner.textContent = "Computer chose Earth";
        result.textContent = "It's a tie! They're the same element."; 
        break;

      case 2: //pc chose fire
        winner.textContent = "Computer chose Fire";
        result.textContent = "You win! Earth beats Fire.";
        playerPoints += 1;
        break;

      case 3: //pc chose air
        winner.textContent = "Computer chose Air";
        result.textContent = "It's a tie! Earth and Air are opposite elements."
        break;
    }

  } else if (playerSelection === 2) { //player chose fire

    switch (computerSelection) {
      
      case 0: //pc chose water
        winner.textContent = "Computer chose Water";
        result.textContent = "It's a tie! Fire and Water are opposite elements.";
        break;
        
      case 1: //pc chose earth
        winner.textContent = "Computer chose Earth";
        result.textContent = "You lose! Earth beats Fire.";
        pcPoints += 1;
        break

      case 2: //pc chose fire
        winner.textContent = "Computer chose Fire";
        result.textContent = "It's a tie! They're the same element."; 
        break;

      case 3: //pc chose air
      winner.textContent = "Computer chose Air";
      result.textContent = "You win! Fire beats Air."; 
      playerPoints += 1;
      break;
    }
  } else { //player chose air

    switch(computerSelection) {
      
      case 0: //pc chose water
        winner.textContent = "Computer chose Water";
        result.textContent = "You win! Air beats Water";
        playerPoints += 1;
        break;
        
      case 1: //pc chose earth
        winner.textContent = "Computer chose Earth";
        result.textContent = "It's a tie! Air and Earth are opposite elements.";
        break

      case 2: //pc chose fire
        winner.textContent = "Computer chose Fire";
        result.textContent = "You lost! Fire beats Air"; 
        pcPoints += 1;
        break;

      case 3: //pc chose air
      winner.textContent = "Computer chose Air";
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