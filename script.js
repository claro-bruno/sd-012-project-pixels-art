// Adicionando quadro de pixels
let takePixelBoard = document.getElementById('pixel-board');

function createBoard() {
  
  for (let indexRow = 1; indexRow <= 5; indexRow += 1) {
    let createRow = document.createElement('tr');
    takePixelBoard.appendChild(createRow);
  };

  let takeRow = document.querySelectorAll('#pixel-board tr');
  for (let walksCol = 0; walksCol < takeRow.length; walksCol += 1) {
    
    for (let indexCol = 1; indexCol <= 5; indexCol += 1) {
      let createCol = document.createElement('td');
      takeRow[walksCol].appendChild(createCol).className = 'pixel';
    };
  };

  let takeCol = document.querySelectorAll('#pixel-board tr td');
  for (let indexTd = 0; indexTd < takeCol.length; indexTd += 1) {
    takeCol[indexTd].style.background = 'white';
  }
};
createBoard();