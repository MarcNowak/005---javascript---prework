function playGame(playerInput){
  clearMessages();
  
    function getMoveName(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      }
      
      else if(argMoveId == 2){
        return 'papier';
      }
      
      else if(argMoveId == 3){
        return 'nożyce';
      }
      
      else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if(argComputerMove == 'kamień' && argPlayerMove == 'papier')
      {
        printMessage('Ty wygrywasz!');
        playerScore=playerScore+1;
      }

      else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
      {
        printMessage('Ty wygrywasz!');
        playerScore=playerScore+1;
      }

      else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') 
      {
        printMessage('Ty wygrywasz!');
        playerScore=playerScore+1;
      }

      else if(argComputerMove == argPlayerMove)
      {
        printMessage('Remis!!!');
      }

      else {
        printMessage('Tym razem przegrywasz :(');
        computerScore=computerScore+1;
      }

      return 'spróbuj ponownie.'
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    let argComputerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera to: ' + argComputerMove);

    let argPlayerMove = getMoveName(playerInput);
    
    printMessage('Twój ruch to: ' + argPlayerMove);
    
    printMessage(displayResult(argComputerMove, argPlayerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
  showResult ("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
  showResult ("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
  showResult ("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});

let playerScore = 0;
let computerScore = 0;

showResult ("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);