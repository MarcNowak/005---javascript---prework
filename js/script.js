function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    }

    else if (argMoveId == 2) {
      return 'papier';
    }

    else if (argMoveId == 3) {
      return 'nożyce';
    }

    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);

    if (argComputerMove !== argPlayerMove) {
      console.log('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

    else {
      printMessage('Dokonaliśmy tego samego wyboru');
      console.log('TEN SAM WYBÓR');
    }


    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
      printMessage('Ty wygrywasz!')
      console.log('IF - GRACZ WYGRYWA');
      playerScore += 1;
    }

    else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
      console.log('ELSE IF - REMIS');
    }

    else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wybierz poprawną liczbę z zakresu 1-3 i spróbuj ponownie');
      console.log('ELSE IF - POZA ZAKRESEM');
    }

    else {
      printMessage('Niestety tym razem przegrywasz');
      console.log('ELSE - PRZEGRANA');
      computerScore += 1;
    }
    
    return 'Spróbuj ponownie.'
  };

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);


  let argComputerMove = getMoveName(randomNumber);
  console.log('Ruch komputera: ' + argComputerMove);
  printMessage('Ruch KOMPUTERA: ' + argComputerMove);


  let argPlayerMove = getMoveName(playerInput);
  console.log('Ruch gracza: ' + argPlayerMove);
  printMessage('Ruch GRACZA to: ' + argPlayerMove);


  printMessage(displayResult(argComputerMove, argPlayerMove));
  console.log('DISPLAY RESULT');
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
  showResult("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
  showResult("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
  showResult("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});

let playerScore = 0;
let computerScore = 0;

showResult("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);