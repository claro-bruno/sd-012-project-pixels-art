const colorPalette = document.querySelector('#color-palette');
const colorArray = ['black', 'red', 'blue', 'pink', 'purple', 'green', 'orange', 'yellow'];
const pixelBoard = document.querySelector('#pixel-board');
let selectedColor = 'black';

window.onload = applyColor();

function paletaDeCores(colorNumber, colorArray) {  
  for (let index = 0; index < colorNumber; index ++) {
    const divColorPalette = document.createElement('div');
    divColorPalette.className = 'color';
    divColorPalette.style.backgroundColor = colorArray[index];
    colorPalette.appendChild(divColorPalette);
    if (divColorPalette.style.backgroundColor === 'black') {
      divColorPalette.classList.add('selected');
    }
  }
};

function fillPixelBoard(lineNumber, columnNumber) {
  for (let indexL = 0; indexL < lineNumber; indexL ++) {
    const boardLine = document.createElement('div');
    pixelBoard.appendChild(boardLine);
    for (let indexC = 0; indexC < columnNumber; indexC ++) {
      const boardColumn = document.createElement('div');
      boardColumn.className = 'pixel';
      pixelBoard.appendChild(boardColumn);
    }
  }
};

function applyColor() {
  document.addEventListener('click', function(event) {
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = selectedColor;
    }
  })
}

function copyColor() {
  document.addEventListener('click', function(event) {
    if (event.target.className === 'color') {
      const classSelected = document.querySelector('.selected');
      classSelected.classList.remove('selected');
      event.target.classList.add('selected');
      selectedColor = event.target.style.backgroundColor;
    }
  })
}

paletaDeCores(4, colorArray);
fillPixelBoard(5, 5);
copyColor();
applyColor();