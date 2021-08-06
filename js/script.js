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

console.log('wywołano: argMoveId')

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } 
  else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
  {
    printMessage('Ty wygrywasz!');
  }

  else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') 
  {
    printMessage('Ty wygrywasz!');
  }

  else if(argComputerMove == argPlayerMove)
  {
    printMessage('Remis!!!');
  }
  else {
    printMessage('Tym razem przegrywasz :(');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Ruch komputera to: ' + argComputerMove);

console.log('wywołano: Wybor numeru przez gracza')

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + argPlayerMove);
console.log('wywołano: twój ruch')

printMessage('wynik to: ' + displayResult(argComputerMove, argPlayerMove));
console.log('wywołano: wygrywasz / przegrywasz')