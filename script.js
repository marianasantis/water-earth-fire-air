let points = 0;

// FOR 5 rounds INCREMENT counter and CALL playRound function while storing points per victory
for(i = 1; i <= 5; i++) {
  console.log('Round ' + i)
  points += (playRound());
}

if (points >= 3) {
  console.log("Congrats! You've won the game!")
} else {
  console.log("You've lost the game. Better luck next time!")
}

// START round
function playRound(playerSelection, computerSelection) {

  // GET player selection and make it case insensitive
  playerSelection = prompt('Your choice: ').toLowerCase()

  // GET computer selection 
  computerSelection = Math.floor(Math.random() * 3)

  // TRANSLATE player selection to a number
  // Rock = 0; Paper = 1; Scissors = 2
  switch(playerSelection) {
    
    case 'rock':
      playerSelection = 0;
      break;
    
    case 'paper':
      playerSelection = 1;
      break;
    
    case 'scissors':
      playerSelection = 2;
      break;
    
    default:
      playerSelection = null;
  }

  // CODE the game rules and re-play if it's a tie
  if (playerSelection === 0) {
    
    switch(computerSelection) {
      
      case 0:
        return playRound();

      case 1:
        console.log('You lose. Paper beats rock.');
        return 0;
        
      case 2:
        console.log('You win. Rock beats scissors.');
        points = 1;
        return 1; 
      
    }
  
  } else if (playerSelection === 1) {
    
    switch (computerSelection) {
      
      case 0:
        console.log('You win. Paper beats rock.');
        return 1;
        
      case 1:
        return playRound();

      case 2:
        console.log('You lose. Scissors beats paper.');
        return 0;
    }

  } else if (playerSelection === 2) {

    switch (computerSelection) {
      
      case 0:
        console.log('You lose. Rock beats scissors.');
        return 0;
        
      case 1:
        console.log('You win. Scissors beats paper.');
        return 1;

      case 2:
        return playRound();
    }

  } else {

    console.log('Answer is not valid');
    return playRound();
  }
}
