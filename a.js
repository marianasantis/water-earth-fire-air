
function playRound(playerSelection, computerSelection) {
  playerSelection = 0;
  computerSelection = 0; 
  
  if (playerSelection === 0) {
    switch(computerSelection) {
      
      case 0:
        return "It's a tie";

      case 1:
        return 'You lose';

      case 2:
        return 'You win';
    }
  }
}

playRound();
