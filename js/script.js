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

  return 'gra zakończona.'
}

console.log('Wywołanie: Losuję liczbę')

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wywołanie: Wylosowana liczba  / ruch komputera to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
printMessage('Ruch komputera to: ' + argComputerMove);

console.log('Wywołanie: Wybór liczby przez gracza')
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wywołanie: Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
console.log('Przypisanie wyboru gracza')

printMessage('Twój ruch to: ' + argPlayerMove);
console.log('Wywołanie: Ruch gracza')

printMessage('Status: ' + displayResult(argComputerMove, argPlayerMove));
console.log('Wywołanie: Wyświetlenie wyniku')