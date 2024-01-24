// FOR 5 rounds INCREMENT counter and CALL playRound function
for(i = 1; i <= 5; i++) {
  playRound();
  console.log('Round ' + i) //rm this
}

// START round
function playRound(playerSelection, computerSelection) {

  // GET player selection and make it case insensitive
  playerSelection = 'rock' // prompt('Your choice: ').toLowerCase()

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

  // CODE the game rules and re-play if its a tie
  if (playerSelection === 0) {
    
    switch(computerSelection) {
      
      case 0:
        return "It's a tie";
        //playRound();

      case 1:
        return 'You lose';

      case 2:
        return 'You win';
    }
  
  } else if (playerSelection === 1) {
    
    switch (computerSelection) {
      
      case 0:
        return 'You win';
        
        case 1:
        return "It's a tie";
        //playRound();

        case 2:
        return 'You lose';
    }

  } else if (playerSelection === 2) {

    switch (computerSelection) {
      
      case 0:
        return 'You lose';
        
        case 1:
        return 'You win';
        
        case 2:
        return "It's a tie";
        //playRound();
        
    }
  } else {
    return 'Answer is not valid';
    //playRound();
  }
// uncomment replay round and prompt
}