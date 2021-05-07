// Adicionando quadro de pixels
const takePixelBoard = document.getElementById('pixel-board');

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

      takeRow[walksCol].style.cursor = 'pointer';
    };
  };
  let takeCol = document.querySelectorAll('#pixel-board tr td');
  for (let indexTd = 0; indexTd < takeCol.length; indexTd += 1) {
    takeCol[indexTd].style.background = 'white';
  };
};
createBoard();

// Adicionando classe Selected quando elemento da paleta de cores for clicado.

//   for (let indexTakePalette = 0; indexTakePalette < takePalette.length; indexTakePalette += 1) {
  //     takePalette[indexTakePalette].style.cursor = 'pointer';
  
  //     takePalette[indexTakePalette].addEventListener('click', function(){
    
    //       // takePalette[indexTakePalette].classList.remove('selected');
    //       takePalette[indexTakePalette].className = 'color selected';
    
    //     });
//   };
// };

// Tentativa 2
function removeSelected() {
  const takePalette = document.querySelectorAll('.color');
  for (let index = 0; index < takePalette.length; index += 1) {
    takePalette[index].classList.remove('selected');
  };
};

function addEventToPalette() {
  const takePalette = document.querySelectorAll('.color');
  for (let index = 0; index < takePalette.length; index += 1) {
    takePalette[index].addEventListener('click', function(event){
      removeSelected();
      event.target.className += ' selected';
    });
  };
};
addEventToPalette();