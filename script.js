let playerPoints = 0;
let pcPoints = 0;

// FOR 5 rounds INCREMENT counter and CALL playRound function while storing points per victory]
/*
for(i = 1; i <= 5; i++) {
  console.log('Round ' + i)
  points += (playRound());
}


if (points >= 3) {
  console.log("Coreturn 0;ngrats! You've won the game!")
} else {
  console.log("You've lost the game. Better luck next time!")
}

*/


function playRound(playerSelection, computerSelection) {

  let result = document.querySelector(".result");
  let winner = document.querySelector(".winner");
  let pcChoice = document.querySelector(".pcChoice")
  result.textContent = "";
  winner.textContent = "";

  if (playerSelection === 0) {
    
    switch(computerSelection) {
      
      case 0:
        pcChoice.textContent = "Computer chooses Rock";
        result.textContent = "It's a tie! Try again.";  
        break;

      case 1:
        pcChoice.textContent = "Computer chooses Paper";
        result.textContent = "You lose. Paper beats Rock.";
        pcPoints += 1;
        break;
        
      case 2:
        pcChoice.textContent = "Computer chooses Scissors";
        result.textContent = "You win. Rock beats Scissors.";
        playerPoints += 1;
        break;
    }
  
  } else if (playerSelection === 1) {
    
    switch (computerSelection) {
      
      case 0:
        pcChoice.textContent = "Computer chooses Rock";
        result.textContent = "You win. Paper beats Rock.";
        playerPoints += 1;
        break;
        
      case 1:
        pcChoice.textContent = "Computer chooses Paper";
        result.textContent = "It's a tie! Try again."; 
        break;

      case 2:
        pcChoice.textContent = "Computer chooses Scissors";
        result.textContent = "You lose. Scissors beats Paper.";
        pcPoints += 1;
        break;
    }

  } else if (playerSelection === 2) {

    switch (computerSelection) {
      
      case 0:
        pcChoice.textContent = "Computer chooses Rock";
        result.textContent = "You lose. Rock beats Scissors.";
        pcPoints += 1;
        break;
        
      case 1:
        pcChoice.textContent = "Computer chooses Paper";
        result.textContent = "You win. Scissors beats Paper.";
        playerPoints += 1;
        break

      case 2:
        pcChoice.textContent = "Computer chooses Scissors";
        result.textContent = "It's a tie! Try again."; 
        break;
    }
  }

  let playerNumber = document.querySelector(".playerNumber");
  let pcNumber = document.querySelector(".pcNumber");
  playerNumber.textContent = playerPoints;
  pcNumber.textContent = pcPoints;
  
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
    let computerSelection = Math.floor(Math.random() * 3);
    playRound(playerSelection, computerSelection);
  });
});