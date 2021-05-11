// Adicionando cores à paleta
let takeColor = document.querySelectorAll('.color');
let colors = ['black', 'red', 'blue', 'green'];

for (let index = 0; index < takeColor.length; index += 1) {
  takeColor[index].style.backgroundColor = colors[index];
}

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


// Adicionando funcionalidade à paleta de cores
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
    takePalette[index].style.cursor = 'pointer';
  };
};
addEventToPalette();

// Adicionando função de pintar quadro de pixels
let takeSelectedBg = document.querySelector('.selected').style.backgroundColor;

let takePixels = document.querySelectorAll('.pixel');

for (let index = 0; index < takePixels.length; index += 1) {
  takePixels[index].addEventListener('click', function(event) {
    event.target.style.backgroundColor = takeSelectedBg;
  });
};



// Limpa quadro de pixels
function clearBoard() {
  const takeClearBoard = document.getElementById('clear-board');
  const takePixels = document.querySelectorAll('td.pixel');
 
  takeClearBoard.addEventListener('click', function() {
    for (let index = 0; index < takePixels.length; index += 1) {
      takePixels[index].style.backgroundColor = 'white';
    };
  });
};
clearBoard();